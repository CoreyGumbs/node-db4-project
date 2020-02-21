const express = require('express');
const db = require('../data/db-config');
const router = express.Router();


router.get('/', (req, res) => {
    db('recipe')
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error retrieving recipes'});
    })
});

router.get('/:id', (req, res) => {
    db('recipe')
    .where({id: req.params.id})
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error retrieving recipe'});
    });
});

module.exports = router;