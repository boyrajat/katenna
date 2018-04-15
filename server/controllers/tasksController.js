const db = require("../models");
const Task = require("../models/task");
// Defining methods for the tasksController
module.exports = {
  findAll: function (req, res) {
    console.log("inside findall");
    Task
      .find({})

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Task
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByDepartment: function (req, res) {
    Task
      .find({ name: req.params.department })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  create: function (req, res) {
    console.log("inside create");
    console.log(req.body.data);
    Task
      .create(req.body.data)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    Task
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};