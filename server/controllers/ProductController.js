const { default: slugify } = require('slugify')
const { User, Product, Platform, Image, sequelize } = require('../models')

class ProductController {
  static async fetchProducts(req, res, next) {
    try {
      const data = await Product.findAll({ include: [Platform, User, Image] })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async createProducts(req, res, next) {
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
  
      const image =
        imgUrl.map(el => ({
          imgUrl: el,
          productId: product.id
        }));
  
      await Image.bulkCreate(image, { transaction: t })
  
      await t.commit();

      res.status(201).json({ message: `Success create product with id ${product.id}` })
    } catch (error) {

      await t.rollback();
  
      next(error)
    }
  }

  static async updateProducts(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {id} = req.params

      const {
        name,
        description,
        genre,
        publisher,
        mainImg,
        release_date,
        imgUrl,
        platformId } = req.body

      const isProduct = await Product.findByPk(id)

      if (!isProduct) {
        throw { name: 'errorNotFound' }
      }

      await Product.update({
        name,
        slug: slugify(name),
        description,
        genre,
        publisher,
        mainImg,
        release_date,
        platformId
      },
        { where: { id } },
        { transaction: t })

      await Image.destroy({ where: { productId: id } })

      const image =
        imgUrl.map(el => ({
          imgUrl: el,
          productId: id
        }));

      await Image.bulkCreate(image, { transaction: t })

      await t.commit();

      res.status(201).json({ message: `Success update product with id ${id}` })
    } catch (error) {

      await t.rollback();

      next(error)
    }
  }

  static async deleteProducts(req, res, next) {
    try {
      const { id } = req.params

      const isProduct = await Product.findByPk(id)
      if (!isProduct) {
        throw {name: 'errorNotFound'}
      }

      await Product.destroy({ where: { id } })
      res.status(200).json({
        message: `Product with id ${id} has been successfully deleted`
      })
    } catch (error) {
      next(error)
    }
  }
}


module.exports = ProductController