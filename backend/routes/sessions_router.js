const express = require("express");
const router = express.Router();

/*THIS IS A HELPER SQL TABLE
 TO HELP USERS AND TRAINERS
 KEEP TRACK OF THEIR SESSIONS/CLASSES */

//get all sessions by trainer ID
router.get("/trainer/:id", (req, res) => {});
//get all sessions by customer ID
router.get("/customer/:id", (req, res) => {});
//get all sessions by workout id
router.get("/workout/:id", (req, res) => {});

//delete by ID
router.delete("/", (req, res) => {});

module.exports = router;
