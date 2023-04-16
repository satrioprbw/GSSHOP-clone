
const { Platform } = require('../models')

class PlatformController {

  static async fetchPlatforms(req, res, next) {
    try {
      const data = await Platform.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async createPlatforms(req, res, next) {
    try {
      const { name } = req.body
      const data = await Platform.create({ name })
      res.status(201).json({ message: `Success create platform with id ${data.id}` })
    } catch (error) {
      next(error)
    }
  }

  static async updatePlatforms(req, res, next) {
    try {
      const { id } = req.params
      const { name } = req.body

      const isPlatform = await Platform.findByPk(id)
      if (!isPlatform) {
        throw { name: 'errorNotFound' }
      }

      await Platform.update({ name }, { where: { id } })
      res.status(201).json({ message: `Success update platform with id ${id}` })
    } catch (error) {
      next(error)
    }
  }

  static async deletePlatforms(req, res, next) {
    try {
      const { id } = req.params

      const isPlatform = await Platform.findByPk(id)
      if (!isPlatform) {
        throw {name: 'errorNotFound'}
      }

      await Platform.destroy({ where: { id } })
      res.status(200).json({
        message: `Platform with id ${id} has been successfully deleted`
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PlatformController