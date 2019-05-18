const express = require("express");
const router = express.Router();
const workout_helper = require("../workout_helper");

//get all workouts
router.get("/", async (req, res) => {
  const response = await workout_helper.getAllWorkouts();
  if (!response) {
    return res.json({ message: "There was a error getting all workouts" });
  }
  res.json({ data: response });
});

//get a workout by id
router.get("/:id", async (req, res) => {
  const response = await workout_helper.getAWorkoutById(req.params.id);
  if (!response) {
    return res.json({ message: "There was a error getting a workouts by id" });
  }
  res.json({ data: response });
});

//get a workout by trainer id
router.get("/:id", async (req, res) => {
  const response = await workout_helper.getAWorkoutByTrainerId(req.params.id);
  if (!response) {
    return res.json({
      message: "There was a error getting a workouts by trainer id"
    });
  }
  res.json({ data: response });
});

//add a workout
router.post("/", async (req, res) => {
  const response = await workout_helper.addAWorkout(req.body);
  if (!response) {
    return res.json({ message: "There was a error adding a workout" });
  }
  res.json({ data: response });
});

//update a workout
router.put("/:id", async (req, res) => {
  const response = await workout_helper.updateAWorkout(req.params.id, req.body);
  if (!response) {
    return res.json({ message: "There was a error editing a workout" });
  }
  res.json({ message: "Data was successfully updated" });
});

//delete a workout
router.delete("/:id", async (req, res) => {
  const response = await workout_helper.deleteAWorkout(id);
  if (!response) {
    return res.json({ message: "There was a error deleting the workout!" });
  }
  res.json({
    message:
      "Successfully deleted data please do a get request again to get valid data"
  });
});

module.exports = router;
