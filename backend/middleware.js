const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = server => {
  server.use(cookieParser());
  server.use(cors());
  server.use(bodyParser());
};
