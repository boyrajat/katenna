const db = require("../models");
const Company = require("../models/company");
// Defining methods for the tasksController
module.exports = {
  findAll: function (req, res) {
    console.log("inside findall");
    Company
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Company
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByDepartment: function (req, res) {
    console.log("inside company property");
    Company
      .find({}, req.params.department)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  create: function (req, res) {
    Company
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    Company
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Company
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
