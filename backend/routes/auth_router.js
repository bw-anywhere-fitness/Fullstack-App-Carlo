const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const auth_helper = require("../auth_helper");
const { jwt_sign } = require("../jwt");
const md5 = require("md5");
console.log(jwt_sign);

router.post("/register", async (req, res) => {
  const creds = req.body;
  if (!creds) return res.json({ message: "No creds" });
  if (!creds.password)
    return res.json({ message: "password field is required" });
  const pwd = bcrypt.hashSync(creds.password, 10);
  creds.password = pwd;
  const gravatarHashedEmail = await md5(creds.email);
  creds.gravatar = `https://www.gravatar.com/avatar/${gravatarHashedEmail}?s=200`;
  await auth_helper.addUser(creds);
  const curr_user = await auth_helper.findByEmail(creds.email);
  const token = jwt_sign(curr_user.id);
  res.cookie("token", token, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true
  });
  res.json({ message: "Done!" });
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
