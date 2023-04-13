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
      const data = await Product.findAll({ include: [Platform, User, Image] })
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Internal server error'
      })
    }
  }

  static async fetchPlatforms(req, res) {
    try {
      const data = await Platform.findAll()
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
      const {
        name,
        description,
        genre,
        publisher,
        mainImg,
        release_date,
        imgUrl,
        platformId } = req.body

      const product = await Product.create({
        name,
        slug: slugify(name),
        description,
        genre,
        publisher,
        mainImg,
        release_date,
        authorId: req.user.id,
        platformId
      }, { transaction: t })

      let image = '' 
      console.log(typeof imgUrl);
      if(typeof imgUrl === 'object'){
         image =
          imgUrl.map(el => ({
            imgUrl: el,
            productId: product.id
          }));
      } else {
         image = [imgUrl]
      }

      await Image.bulkCreate(image, { transaction: t })

      await t.commit();
      res.status(200).json({ message: 'Success create product' })
    } catch (error) {
      console.log(error);
      await t.rollback();
      
      if (error.name === 'SequelizeValidationError') {
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

  static async createPlatforms(req, res) {
    try {
      const { name } = req.body
      const data = await Platform.create({ name })
      res.status(200).json({ message: 'Success create platform' })
    } catch (error) {
      console.log(error);
      if (error.name === 'SequelizeValidationError') {
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

  static async deleteProducts(req, res) {
    try {
      const { id } = req.params
      const theProduct = await Product.findByPk(id)
      if (!theProduct) {
        res.status(404).json({
          message: "Data not found"
        })
      }
      const deleting = await Product.destroy({ where: { id } })
      res.status(200).json({
        message: 'Product has been successfully deleted'
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error"
      })
    }
  }
}

module.exports = Controller