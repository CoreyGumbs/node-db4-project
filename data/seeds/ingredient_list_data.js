
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_list').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 1.5,
          measurements_id: 9
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: 2,
          measurements_id: 1
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          quantity: 1,
          measurements_id: 2
        },
        {
          recipe_id: 2,
          ingredient_id: 1,
          quantity: 3,
          measurements_id: 1
        }
      ]);
    });
};
