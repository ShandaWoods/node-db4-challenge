exports.up = (knex, Promise) => {
  return knex.schema.createTable('ingredients', t => {
    t.increments();
    t.string('name').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ingredients');
};