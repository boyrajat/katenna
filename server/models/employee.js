const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    index: { unique: true },
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  tasks: [
    {
      type: Boolean,
      required: false
    }
  ]

}, { strict: false });

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
