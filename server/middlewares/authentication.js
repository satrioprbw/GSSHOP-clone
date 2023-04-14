const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication(req, res, next) {
  try {
    const token = req.headers.access_token

    if (!token) {
      throw{name: "invalidToken" }
    }

    const verifyResult = verifyToken(token)

    const user = await User.findByPk(verifyResult.id)
    if (!user) {
      throw { name: 'invalidToken' }
    }
    req.user = {id: user.id, email: user.email, role: user.role}

    next()
  } catch (error) {
    if (error.name === 'invalidToken' || error.name === 'JsonWebTokenError') {
      res.status(401).json({
        message: 'Invalid token'
      })
    } else {
      res.status(500).json({
        message: 'Internal server error'
      })
    }
  }
}

module.exports = authentication