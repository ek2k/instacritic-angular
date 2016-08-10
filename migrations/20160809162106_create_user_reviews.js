
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_reviews', (table) => {
    table.increments();
    table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('cascade');
    table.integer('episode_id').unsigned().index().references('id').inTable('episodes').onDelete('cascade');
    table.string('review', 500);
    table.boolean('spoilers');
    table.integer('star_rating');
  })
};

exports.down = function(knex, Promise) {

};
