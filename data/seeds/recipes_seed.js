
exports.seed = function(knex) {
      return knex('recipes').insert([
        { recipe_name: 'Spaghetti Bolognese', created_at: '2021-01-01 08:23:19.120'},
        { recipe_name: 'MO:MO', created_at: '2021-03-02 07:23:19.120'},
        { recipe_name: 'Pizza', created_at: '2021-02-04 08:23:19.120'},
        { recipe_name: 'Chicken Chilli', created_at: '2021-03-01 08:23:19.120'},
       ]);
};
