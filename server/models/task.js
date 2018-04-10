const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    index: { unique: true },
    required: true
  },
  supervisor: {
    type: String,
    required: true
  },
  tasks: [
    {
      item: {
        type: String,
      },
      description: [{
        type: String,
        required: true
      }]
    }
  ]
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
