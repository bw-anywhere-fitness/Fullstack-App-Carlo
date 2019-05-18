exports.up = function(knex, Promise) {
  return knex.schema.createTable("workout", tbl => {
    tbl.increments();
    tbl.decimal("lat");
    tbl.decimal("lng");
    tbl.integer("trainer_id").notNullable();
    tbl.string("type").notNullable();
    tbl.string("name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workout");
};
