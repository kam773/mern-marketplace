const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')
const app = express()

const userRoutes = require('./routes/api/user.routes')
const authRoutes = require('./routes/api/auth.routes')
const shopRoutes = require('./routes/api/shop.routes')
const productRoutes = require('./routes/api/product.routes')
const orderRoutes = require('./routes/api/order.routes')

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', shopRoutes)
app.use('/', productRoutes)
app.use('/', orderRoutes)



module.exports = app;