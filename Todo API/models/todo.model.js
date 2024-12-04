const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  list: String,
});

module.exports = mongoose.model("todo", todoSchema);
