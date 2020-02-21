
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {
          instruction: 'Beat Eggs',
          recipe_id: 1
        },
        {
          instruction: 'Boil Water',
          recipe_id: 2
        },
        {
          instruction: 'mix seasonings in bowl.',
          recipe_id: 3
        },
        {
          instruction: 'wash chicken in lemon juice',
          recipe_id: 5
        },
        {
          instruction: 'slice cheese.',
          recipe_id: 4
        }
      ]);
    });
};
