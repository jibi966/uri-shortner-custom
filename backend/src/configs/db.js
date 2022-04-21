const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    process.env.MONGODB
  );
};

module.exports = connect;
