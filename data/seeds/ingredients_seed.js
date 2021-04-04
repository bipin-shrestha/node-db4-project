
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'olive oil', quantity: 0.014, step_id: 1},
    { ingredient_name: 'All Purpose Flour', quantity: 5 , step_id: 2},
    { ingredient_name: 'Chopped vegetables', quantity: 2, step_id: 3},
    { ingredient_name: 'Whole Chicken', quantity: 1, step_id: 4},
    { ingredient_name: 'vegetables', quantity: 2, step_id: 4}    
  ]);
};
