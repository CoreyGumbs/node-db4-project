exports.up = function(knex) {
    return knex.schema.createTable('recipe_steps', tbl => {
        tbl.increments(); 
        tbl.string('instruction', 255).notNullable();

          //foreign key to recipe
          tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipe')  
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe')
    .dropTableIfExists('recipe_steps')
};
