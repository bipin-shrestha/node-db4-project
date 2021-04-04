const db = require('../data/db_config.js');

function getRecipeById(recipe_id){
   return db('recipes as r')
    .leftJoin('steps as s','r.recipe_id','s.recipe_id')
    .leftJoin('ingredients as i', 'i.step_id','s.step_id')
    .where({'r.recipe_id':recipe_id})
    .orderBy('s.step_number')
    .select('r.recipe_id', 'r.recipe_name', 'r.created_at', 's.step_id', 's.step_number', 's.step_instructions', 'i.ingredient_id', 'i.ingredient_name', 'i.quantity');
}

function getIngredientsByStepId(step_id){
    return db('ingredients as i')
    .join('steps as s','i.step_id','s.step_id')
    .where({'s.step_id':step_id})
    .select('i.ingredient_id','i.ingredient_name','i.quantity');
}

module.exports ={getRecipeById, getIngredientsByStepId};


// function getRecipeById(recipe_id){
//     return db('recipes as r')
//      .join('steps as s','instructions as i','r.recipe_id','s.recipe_id','i.step_id','s.step_id')
//      .where({'r.recipe_id':recipe_id})
//      .orderBy('recipe_name','created_at','s.step_number','s.step_instructions')
//      .select('s.step_id','s.step_number','s.step_instruction','r.recipe_id','r.recipe_name','r.created_at')
//      .join('instructions as i', 'i.step_id','s.step_id')
//      .where({'s.step_id':step_id})
//      .orderBy('s.step_number','s.step_instructions')
//      .select('s.step_id,s.step_number','s.step_instructions','i.ingredient_id','i.ingredient_name','i.quantity');
//  }



// Select r.recipe_id, r.recipe_name, r.created_at, s.step_id, s.step_number, s.step_instructions,
// i.ingredient_id, i.ingredient_name, i.quantity
// from recipes as r join steps as s on  r.recipe_id = s.recipe_id
// join ingredients as i on i.step_id = s.step_id where r.recipe_id = 4;