const db = require("./db/db");

module.exports = { findByEmail, addUser, updateUser, deleteUser, findUserById };

function findByEmail(email) {
  return db("users").where({ email });
}

function addUser(user) {
  return db("users").insert(user);
}

function updateUser(id, user) {
  return db("users")
    .where({ id })
    .update(user);
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}

function findUserById(id) {
  return db("users").where({ id });
}
