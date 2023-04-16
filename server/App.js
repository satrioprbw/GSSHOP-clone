const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes')
const port = process.env.PORT || 3000
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})
