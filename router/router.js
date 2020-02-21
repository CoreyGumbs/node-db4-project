const express = require('express');
const db = require('../data/db-config');
const router = express.Router();

//Recipes
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

router.post('/', (req, res) => {
    db('recipe')
    .insert(req.body)
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error adding recipe'});
    })
});

router.put('/:id', (req, res) => {
    db('recipe')
    .update(req.body)
    .where({id: req.params.id})
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error updating recipe'});
    })
});

router.delete('/:id', (req, res) => {
    db('recipe')
    .where({id: req.params.id})
    .del()
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error deleting recipe'});
    })
})

//Recipe Steps

//Ingredients

router.get('/ingredients', (req, res) => {
    db('ingredients')
    .then(ingredients => {
        console.log(ingredients);
        res.status(200).json(ingredients);
    })
    .catch(error => {
        res.status(500).json({error: "There was an issue retrieving the ingredients"});
    })
})

router.get('/ingredients/:id', (req, res) => {
    db('ingredients')
    .where({id: req.params.id})
    .first()
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error retrieving recipe'});
    });
});




module.exports = router;