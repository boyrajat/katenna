const db = require("../models");
const Employee = require("../models/employee");
// Defining methods for the tasksController
module.exports = {
  findAll: function (req, res) {
    console.log("inside findall");
    Employee
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Employee
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByDepartment: function (req, res) {
    Employee
      .find({ name: req.params.department })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  create: function (req, res) {
    Employee
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    Employee
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Employee
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};