
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review_comments', (table) => {
    table.increments();
    table.integer('review_id').unsigned().index().references('id').inTable('user_reviews').onDelete('cascade');
    table.string('comment', 500);
    table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('review_comments');
};
