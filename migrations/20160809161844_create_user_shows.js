
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_shows', (table) => {
    table.increments();
    table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('cascade');
    table.integer('show_id').unsigned().index().references('id').inTable('shows').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_shows')
};
