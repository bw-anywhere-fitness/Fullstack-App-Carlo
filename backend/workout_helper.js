const db = require("./db/db");

module.exports = {
  getAllWorkouts,
  getAWorkoutById,
  getWorkoutByTrainerId,
  addAWorkout,
  updateAWorkout,
  deleteAWorkout
};

function getAllWorkouts() {
  return db("workout");
}

function getAWorkoutById(id) {
  return db("workout").where({ id });
}

function getWorkoutByTrainerId(t_id) {
  return db("workout").where({ trainer_id: t_id });
}
function addAWorkout(workout) {
  return db("workout").insert(workout);
}

function updateAWorkout(id, workout) {
  return db("workout")
    .where({ id })
    .update(workout);
}

function deleteAWorkout(id) {
  return db("workout")
    .where({ id })
    .del();
}
