exports.up = (knex, Promise) => {
  return knex.schema.createTable('recipes', t => {
    t.increments();
    t.string('name').unique().notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('recipes');
};