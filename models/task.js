const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  department: { type: String, required: true },
  task: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
