
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shows', (table) => {
    table.increments();
    table.string('name');
    table.string('network');
    table.string('genre');
  })
};

exports.down = function(knex, Promise) {
  return knex.schma.dropTable('shows')
};
