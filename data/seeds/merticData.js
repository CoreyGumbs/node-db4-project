
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {
          measurement_name: 'none',
          measure_abbv: 'none'
        },
        {
          measurement_name: 'mililiter',
          measure_abbv: 'ml.'
        },
        {
          measurement_name: 'teaspoon',
          measure_abbv: 'tsp.'
        },
        {
          measurement_name: 'tablespoon',
          measure_abbv: 'tbsp.'
        },
        {
          measurement_name: 'fluid ounce',
          measure_abbv: 'fl oz.'
        },
        {
          measurement_name: 'cup',
          measure_abbv: 'cup'
        },
        {
          measurement_name: 'pint',
          measure_abbv: 'pint'
        },
        {
          measurement_name: 'quart',
          measure_abbv: 'quart'
        },
        {
          measurement_name: 'liter',
          measure_abbv: 'ltr'
        },
        {
          measurement_name: 'gram',
          measure_abbv: 'gr.'
        },
        {
          measurement_name: 'ounce',
          measure_abbv: 'oz.'
        },
        {
          measurement_name: 'pound',
          measure_abbv: 'lb.'
        },
        {
          measurement_name: 'kilogram',
          measure_abbv: 'kg.'
        }
      ]);
    });
};
