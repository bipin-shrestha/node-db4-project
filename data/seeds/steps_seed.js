
exports.seed = function(knex) {
  return knex('steps').insert([
    { step_number: 1, step_instructions:"Put a large saucepan on a medium heat", recipe_id: 1},
    { step_number: 1, step_instructions:"make a doug", recipe_id: 2},
    { step_number: 1, step_instructions:"bake a pizza", recipe_id: 3},
    { step_number: 1, step_instructions:"cut the chicken", recipe_id: 4},   
    { step_number: 2, step_instructions:"Marinate the chicken", recipe_id: 4}
  ]);
};
