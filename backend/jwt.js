module.exports = {
  jwt_sign: user => {
    return jwt.sign({ ...user }, "SECRET", { expiresIn: "60m" });
  },
  jwt_decode: token => {
    jwt.verify(token, "SECRET", (err, decoded_token) => {
      if (err) {
        return false;
      } else {
        return decoded_token;
      }
    });
  }
};
