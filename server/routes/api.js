const express = require('express');
// const taskRoutes = require("./TaskRoutes");
const tasksController = require("../controllers/tasksController");
const employeesController = require("../controllers/employeesController");
const companyController = require("../controllers/companyController");

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "Test for message the user will see only when logged in",
    // user values passed through from auth middleware
    user: req.user
  });
});

module.exports = router;
