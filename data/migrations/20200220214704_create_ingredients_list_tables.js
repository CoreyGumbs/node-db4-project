exports.up = function(knex) {
    return knex.schema.createTable('ingredients_list', tbl => {
      tbl.primary(['recipe_id', 'ingredient_id']);
      tbl.float('quantity').notNullable().unsigned();
  
      //recipe FK
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  
      //ingredients FK
      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  
      //metric FK
      tbl.integer('measurements_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('measurements')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    })
    .createTable('measurements', tbl => {
      tbl.increments();
      tbl.string('measurement_name', 255).notNullable().unique();
      tbl.string('measure_abbv', 255).notNullable().unique();
    });
  
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients_list')
    .dropTableIfExists('measurements'); 
  };
