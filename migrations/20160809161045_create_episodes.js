
exports.up = function(knex, Promise) {
  return knex.schema.createTable('episodes', (table) => {
    table.increments();
    table.integer('show_id').unsigned().index().references('id').inTable('shows');
    table.integer('episode_number');
    table.string('episode_name');
    table.integer('season_number');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('episodes');
};
