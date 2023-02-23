const express = require('express')
const morgan = require('morgan')
const postRouter = require('./src/routes/postRouter')
const userRouter = require('./src/routes/usersRouter')

const app = express()

app.use(morgan('dev'))

app.use('/users', userRouter)
app.use('/post', postRouter)

module.exports = app