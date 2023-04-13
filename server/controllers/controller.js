const { default: slugify } = require('slugify')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User, Product, Platform, Image, sequelize } = require('../models')

class Controller {
  static async register(req, res) {
    try {
      const { username, email, password, phoneNumber, address } = req.body
      const newUser = await User.create({ username, email, password, phoneNumber, address })
      res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      })
    } catch (error) {
      if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          message: error.errors[0].message
        })
      } else {
        console.log(error);
        res.status(500).json({
          message: 'Internal server error'
        })
      }
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body
      if (!email) {
        throw { name: 'invalidEmail' }
      }
      if (!password) {
        throw { name: 'invalidPassword' }
      }
      const user = await User.findOne({ where: { email } })
      if (!user) {
        throw { name: 'invalidToken' }
      }
      const passwordValid = comparePassword(password, user.password)
      if (!passwordValid) {
        throw { name: 'invalidToken' }
      }
      const payload = { id: user.id }
      const access_token = generateToken(payload)
      res.status(200).json({ access_token })
    } catch (error) {
      if (error.name === 'invalidEmail') {
        res.status(400).json({
          message: "Email is required"
        })
      } else if (error.name === 'invalidPassword') {
        res.status(400).json({
          message: "Password is required"
        })
      } else if (error.name === 'invalidToken') {
        res.status(401).json({
          message: "Invalid email/password"
        })
      }
    }
  }

  static async fetchProducts(req, res) {
    try {
      const data = await Product.findAll()
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Internal server error'
      })
    }
  }

  static async createProducts(req, res) {
    const t = await sequelize.transaction();
    try {
      const { name, description, genre, publisher, mainImg, release_date, imgUrl, slug } = req.body
      console.log(imgUrl);
      const product = await Product.create({
        name,
        slug,
        description,
        genre,
        publisher,
        mainImg,
        release_date
      }, { transaction: t })

      const image =
        imgUrl.map(el => ({
          imgUrl: el,
          productId: product.id
        }));

      await Image.bulkCreate(image, { transaction: t })
      await t.commit();
      res.status(200).json({ message: 'Success create product' })
    } catch (error) {
      console.log(error);
      await t.rollback();
    }
  }
}

module.exports = Controller