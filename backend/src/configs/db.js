const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Jibin:Jibi@cluster0.c4lkd.mongodb.net/shortner?retryWrites=true&w=majority"
  );
};

module.exports = connect;
