// implement your posts router here
const express =  require('express')

const router = express.Router()

const Posts = require('./posts-model')

router.get('/', (req,res) => {
    Posts.find()
    .then(posts => {
        res.json(posts)
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "You didn't get the posts"
            })
        })
    })
})

module.exports = router

