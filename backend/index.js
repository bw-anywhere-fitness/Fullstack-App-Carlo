const express = require("express");
const server = express();
const middleware = require("./middleware");

//Middleware init
middleware(server);

server.listen(9000, () => {
  console.log("server listening on port 9000");
});
