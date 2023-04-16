const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User } = require('../models')

class AuthController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body
      const newUser = await User.create({ username, email, password, phoneNumber, address })
      res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
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
        throw { name: 'loginFailed' }
      }
      const passwordValid = comparePassword(password, user.password)

      if (!passwordValid) {
        throw { name: 'loginFailed' }
      }
      const payload = { id: user.id }

      const access_token = generateToken(payload)

      res.status(200).json({ access_token })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = AuthController