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
    });
});

router.post('/', (req, res) => {
    const {title, contents} = req.body;

    Posts
    .insert({title, contents})
    .then(post => {
        res.status(201).json(post)
    })
    .catch(error => {
        res.status(400).json({message: 'Please provide title and contents for post'})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Posts
    .remove(id)
    .then(post => {
        res.status(204).end();
    })
    .catch(error => {
        res.status(500).json({message: 'Error deleting the post'})
    })
})

module.exports = router;