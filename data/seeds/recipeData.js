
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          name: 'Pound Cake'
        },
        {
         name: 'Egg Drop Soup'
       },
       {
         name: 'Pork Chops'
       },
       {
         name: 'Philly Cheese Steak'
       },
       {
         name: 'Baked Chicken'
       }
      ]);
    });
};
