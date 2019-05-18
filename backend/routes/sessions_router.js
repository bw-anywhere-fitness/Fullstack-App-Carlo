const express = require("express");
const router = express.Router();
const session_helper = require("../sessions_helper");

/*THIS IS A HELPER SQL TABLE
 TO HELP USERS AND TRAINERS
 KEEP TRACK OF THEIR SESSIONS/CLASSES */

//get all sessions by trainer ID
router.get("/trainer/:id", async (req, res) => {
  const response = await session_helper.getByTrainerId(req.params.id);
  if (!response) {
    return res.json({ message: "Cant get by trainer id" });
  }
  return res.json({ data: response });
});
//get all sessions by customer ID
router.get("/customer/:id", async (req, res) => {
  const response = await session_helper.getByCustomerId(req.params.id);
  if (!response) {
    return res.json({ message: "Cant get by customer id" });
  }
  return res.json({ data: response });
});
//get all sessions by workout id
router.get("/workout/:id", async (req, res) => {
  const response = await session_helper.getByWorkoutId(req.params.id);
  if (!response) {
    return res.json({ message: "Cant get by workout  id" });
  }
  return res.json({ data: response });
});
//add a session!
router.post("/",async(req,res) => {
    const response = await session_helper.addSession(req.body);
    if(!response){
        return res.json({message: "Problem inserting the session probably missing fields!"})
    }
    res.json({message:"Successful insert please do a get request again to get updated data"})
})

//delete by ID
router.delete("/:id", (req, res) => {
    const response = await session_helper.deleteWorkoutSession(req.params.id);
    if(!response){
        return res.status(500).json({message:"Delete was not a success"})
    }
    res.json({message: "Successfully Deleted!"})
});

module.exports = router;
