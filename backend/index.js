const express = require("express");
const server = express();
const middleware = require("./middleware");
const session_router = require("./routes/sessions_router");
const workout_router = require("./routes/workout_router");
const auth_router = require("./routes/auth_router");
const { jwt_decode } = require("./jwt");
const auth_helper = require("./auth_helper");

//Middleware init
middleware(server);
server.use(decodeUser);
server.use("/session", session_router);
server.use("/workout", workout_router);
server.use("/auth", auth_router);

server.listen(9000, () => {
  console.log("server listening on port 9000");
});

function decodeUser(req, res, next) {
  if (!req.cookies.token) return next();
  console.log(req.cookies.token, "tokens");
  const decoded_id = jwt_decode(req.cookies.token);
  console.log(decoded_id, "decodedid");
  res.json({ decoded_id, message: "SHET" });
}
