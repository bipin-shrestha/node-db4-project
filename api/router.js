
const express = require('express')
const Recipes = require('./model.js');

const router = express.Router()

router.get('/:recipe_id', (req, res, next) => {
    const recipe_id = req.params.recipe_id;
    Recipes.getRecipeById(recipe_id)
    .then(recipe => {
        console.log(recipe);
        const newRecipe = {
            'recipe_id' : 0,
            'recipe_name' : '',
            'created_at' : '',
            'steps'      : []
        };
        let stepIdToCheck = 0;

        for(let i=0; i<recipe.length;i++){
            if(i==0){
                newRecipe.recipe_id = recipe[i].recipe_id;
                newRecipe.recipe_name = recipe[i].recipe_name;
                newRecipe.created_at = recipe[i].created_at;                
            }
            if(recipe[i].step_id != stepIdToCheck){
                newRecipe.steps.push({'step_id':recipe[i].step_id, 
                    'step_number':recipe[i].step_number, 
                    'step_instructions':recipe[i].step_instructions,
                     'ingredients': []
                })
                Recipes.getIngredientsByStepId(recipe[i].step_id)
                .then(ingredients => {
                    console.log(ingredients);
                    if(ingredients.length > 0){
                        const stepItem = newRecipe.steps.filter(item => {
                            if(item.step_id == recipe[i].step_id){
                                return item;
                            }
                        })
                        console.log(stepItem);
                        for(let i=0; i<ingredients.length; i++){
                            console.log(ingredients[i].ingredient_id);
                            stepItem[0].ingredients.push({'ingredient_id':ingredients[i].ingredient_id});
                        }
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
            }
            stepIdToCheck = recipe[i].step_id;
        }
        res.status(200).json(newRecipe);
    })
})

module.exports = router;