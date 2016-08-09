
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username');
    table.string('password');
    table.string('email');
    table.string('avatar');
    table.string('city');
    table.string('state');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
