
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          name: 'sugar'
        },
        {
          name: 'eggs'
        },
        {
          name: 'flour'
        },
        {
          name: 'baking soda'
        },
        {
          name: 'vanilla extract'
        },
        {
          name: 'cinnamon'
        }
      ]);
    });
};
