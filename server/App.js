const express = require('express')
const Controller = require('./controllers/controller')
const cors = require('cors')
const authentication = require('./middlewares/authentication')
const app = express()
<<<<<<< HEAD
const port = process.env.PORT || 3000
=======
const port = 3000
>>>>>>> 7a5621ea629f2c08f5a30cf0651ddff6c8a4d855

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/register', Controller.register)
app.post('/login', Controller.login)

app.get('/pub/products', Controller.fetchProducts)
app.get('/pub/platforms', Controller.fetchPlatforms)

app.use(authentication)

app.post('/products', Controller.createProducts)
app.get('/products', Controller.fetchProducts)
app.post('/platforms', Controller.createPlatforms)
app.get('/platforms', Controller.fetchPlatforms)
app.delete('/products/:id', Controller.deleteProducts)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})
