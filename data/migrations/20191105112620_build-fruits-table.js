
exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    // primary key, auto incrementing, not null etc
    table.increments('id');

    // create a 'name' column, unique, not-nullable, text, 128
    table.text('name', 128).unique().notNullable();
    table.decimal('avgweightoz');
    table.boolean('delicious').defaultTo(1);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
