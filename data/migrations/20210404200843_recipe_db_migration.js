
exports.up = function(knex) {
  return(
      knex.schema
        .createTable('recipes', tbl =>{
            tbl.increments('recipe_id')
            tbl.string('recipe_name')
            tbl.datetime('created_at')            
        })
        .createTable('steps', tbl => {
            tbl.increments('step_id')
            tbl.integer('step_number')
            tbl.string('step_instructions')
            tbl.foreign('recipe_id').references('recipies.recipe_id')        
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id')
            tbl.string('ingredient_name')
            tbl.decimal('quantity')
            tbl.foreign('step_id').references('steps.step_id')
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
  );
};
