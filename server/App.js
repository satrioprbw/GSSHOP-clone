const express = require('express')
const Controller = require('./controllers/controller')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/register', Controller.register)
app.post('/login', Controller.login)

app.post('/products', Controller.createProducts)
app.get('/products', Controller.fetchProducts)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})