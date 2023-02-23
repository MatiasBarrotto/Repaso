const {Router} = require('express')
const userRouter = Router()

userRouter.get('/', (req, res) =>{
    res.status(200).send('all users')
})

userRouter.get('/:id', (req, res) =>{
    res.status(200).send('user by id')
})

userRouter.post('/', (req, res) =>{
    res.status(200).send('post by user')
})

module.exports = userRouter
