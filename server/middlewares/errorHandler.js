
function errorHandler(err, req, res, next) {
  console.log(err);
  switch (err.name) {
    case 'SequelizeValidationError' || 'SequelizeUniqueConstraintError':
      res.status(400).json({
        message: err.errors[0].message
      })
      break;
    case 'invalidEmail':
      res.status(400).json({
        message: "Email is required"
      })
      break;
    case 'invalidPassword':
      res.status(400).json({
        message: "Password is required"
      })
      break;
    case 'invalidToken' || 'JsonWebTokenError':
      res.status(401).json({
        message: "Invalid Token"
      })
      break;
    case 'loginFailed':
      res.status(401).json({
        message: "Invalid email/password"
      })
      break;
    case 'errorNotFound':
      res.status(404).json({
        message: "Error not found"
      })
      break;
    default:
      res.status(500).json({
        message: "Internal server error"
      })
      break;
  }
}

module.exports = errorHandler