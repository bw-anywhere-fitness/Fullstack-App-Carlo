const db = require("./db/db");

module.exports = {
  getByTrainerId,
  getByCustomerId,
  getByWorkoutId,
  deleteWorkoutSession
};

function getByTrainerId(id) {
  return db("workout_session").where({ trainer_id: id });
}

function getByCustomerId(id) {
  return db("workout_session").where({ customer_id: id });
}

function getByWorkoutId(id) {
  return db("workout_session").where({ id });
}

function deleteWorkoutSession(id) {
  return db("workout_session")
    .where({ id })
    .del();
}
