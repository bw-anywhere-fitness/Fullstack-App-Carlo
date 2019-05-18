exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("email")
      .unique()
      .notNullable()
      .comment("Email Field");
    tbl
      .string("password")
      .notNullable()
      .comment("Password field");
    tbl.string("gravatar").notNullable();
    tbl.string("type").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
