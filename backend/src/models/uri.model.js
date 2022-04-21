const mongoose = require("mongoose");
const uriScheme = new mongoose.Schema(
  {
    uricode: { type: String, unique: true, required: true },
    longuri: { type: String, required: true },
    date: { type: String, default: Date.now() },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("uri", uriScheme);
