exports.up = function(knex, Promise) {
  return knex.schema.createTable("workout_session", tbl => {
    tbl.increments();
    tbl.integer("trainer_id").notNullable();
    tbl.integer("customer_id").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workout_session");
};
