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
});

//Recipe Steps
router.get('/all/steps', (req, res) => {
    db('recipe_steps')
    .then(steps => {
        console.log(steps)
        res.status(200).json(steps);
    })
    .catch(error => {
        res.status(500).json({error: `There was an error all recipe's steps`});
    });
});

router.get('/:recipe_id/steps', (req, res) => {
    db('recipe_steps')
    .join('recipe', 'recipe.id', 'recipe_steps.recipe_id')
    .select('instruction', 'recipe.name')
    .where({recipe_id: req.params.recipe_id})
    .then(steps => {
        res.status(200).json(steps);
    })
    .catch(error => {
        res.status(500).json({error: `There was an error finding this recipe's steps`});
    });
});

router.post('/steps', (req, res) =>{
    db('recipe_steps')
    .insert(req.body)
    .then(steps => {
        res.status(200).json(steps);
    })
    .catch(error => {
        res.status(500).json({error: `There was an error adding this recipe's steps`});
    });
});

router.put('/:recipe_id/steps/:steps_id', (req, res) =>{
    console.log(req.params, req.body);
    db('recipe_steps')
    .update(req.body)
    .where({id: req.params.steps_id})
    .then(step => {
        res.status(200).json(step)
    })
    .catch(error => {
        res.status(500).json({error: `There was an error updating this recipe's steps`});
    });
});

router.delete('/:recipe_id/steps/:steps_id', (req, res) => {
    db('recipe_steps')
   .where({ id: req.params.steps_id })
   .del()
   .then(step => {
        res.status(200).json(step)
    })
    .catch(error => {
        res.status(500).json({error: `There was an error deleting this recipe's steps`});
    });
});

//Ingredients
router.get('/all/ingredients', (req, res) => {
    db('ingredients')
    .then(ingredients => {
        res.status(200).json(ingredients);
    })
    .catch(error => {
        res.status(500).json({error: `There was an error retrieving ingredients`});
    });
})

router.post('/ingredients', (req, res) => {
    db('ingredients')
    .insert(req.body)
    .then(ingredient => {
        res.status(200).json(ingredient)
    })
    .catch(error => {
        res.status(500).json({error: `There was an error adding ingredients`});
    });
});

router.put('/ingredients/:id', (req, res) => {
    db('ingredients')
    .update(req.body)
    .where({id: req.params.id})
    .then(ingredient => {
        res.status(200).json(ingredient)
    })
    .catch(error => {
        res.status(500).json({error: `There was an error updating ingredients`});
    });
});

router.delete('/ingredients/:id', (req, res) => {
   
    db('ingredients')
    .where({id: req.params.id})
    .del()
    .then(ingredient => {
        res.status(200).json(ingredient)
    })
    .catch(error => {
        res.status(500).json({error: `There was an error deleting ingredients`});
    });
});

module.exports = router;