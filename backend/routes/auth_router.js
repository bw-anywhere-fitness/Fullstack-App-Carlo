const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const auth_helper = require("../auth_helper");

router.post("/register", async (req, res) => {
  const creds = req.body;
  if (!creds) return res.json({ message: "No creds" });
  if (!creds.password)
    return res.json({ message: "password field is required" });
  res.cookie("token", "register", {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true
  });
  res.send("register");
});

router.post("/login", async (req, res) => {
  const creds = req.body;
  if (!creds) return res.json({ message: "No creds" });
  res.cookie("token", "login", {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true
  });
  res.send("login");
});

module.exports = router;
