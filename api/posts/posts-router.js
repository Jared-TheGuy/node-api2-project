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

router.get('/:id', (req,res) => {
    Posts.findById(req.params.id)
    .then((posts => {
        if (posts) {
            res.json(posts)
        }
        else {
            res.status(404).json({ message: 'this does not exists'})
        }
    }))
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "You didn't get the posts"
        })
    })
})

router.post('/', (req,res) => {
    Posts.insert( req.body)
    .then(created => {
        if (created) {
            res.json(created)
        }
        else {
            res.status(404).json({ message: 'You did it wrong'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "You didn't get the posts"
        })
    })
})

router.put('/:id', (req,res) => {
    Posts.update(req.params.id, req.body)
    .then(update => {
        if (update) {
            res.json(update)
        }
        else {
            res.status(404).json({message: 'You did it wrong'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "You didn't get the posts"
        })
    })
})

router.delete('/:id', (req,res) => {
    Posts.remove(req.params.id)
    .then(removed => {
        if (removed) {
            res.json(removed)
        }
        else {
            res.status(404).json({message: 'You did it wrong'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "You didn't get the posts"
        })
    })
})

module.exports = router

