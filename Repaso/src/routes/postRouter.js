const {Router} = require('express')
const postRouter = Router()

postRouter.get('/', (req,res) =>{
    req.status(200).send('all post')
})
postRouter.get('/:id', (req,res) =>{
    req.status(200).send('post by id')
})
postRouter.post('/', (req,res) =>{
    req.status(200).send('create post')
})

module.exports = postRouter