const express = require('express');

const Posts = require('../data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
    Posts
    .find('posts')
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json({error: 'The posts information cannot be retrieved'})
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    Posts
    .findById(id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json({error: 'The specified post is unavaiable'})
    })
})

module.exports = router;