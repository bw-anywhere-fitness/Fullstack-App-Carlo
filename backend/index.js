const express = require("express");
const server = express();
const middleware = require("./middleware");
const session_router = require("./routes/sessions_router");
const workout_router = require("./routes/workout_router");

//Middleware init
middleware(server);
server.use("/session", session_router);
server.use("/workout", workout_router);

server.listen(9000, () => {
  console.log("server listening on port 9000");
});
