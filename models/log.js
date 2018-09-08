const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
  doctor: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff"
    },
    name: String
  }
});

module.exports = mongoose.model("Log", logSchema);