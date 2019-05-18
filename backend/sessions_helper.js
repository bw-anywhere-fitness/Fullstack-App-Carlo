const db = require("./db/db");

module.exports = {
  getByTrainerId,
  getByCustomerId,
  getByWorkoutId,
  addSession,
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

function addSession(session) {
  return db("workout_session").insert(session);
}

function deleteWorkoutSession(id) {
  return db("workout_session")
    .where({ id })
    .del();
}
