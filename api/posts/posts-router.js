// implement your posts router here
const express =  require('express')

const router = express.Router()

const Posts = require('./posts-model')

router.get('/test', async (req, res) => {
    try {
        res.json({
            message: "Yeah!"
        })
    }
    catch (err) {
        res.json({
            message: "Your a wackamole"
        })
    }
})

module.exports = router

