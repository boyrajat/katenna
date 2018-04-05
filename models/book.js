const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  department: { type: String, required: true },
  task: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
