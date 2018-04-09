const express = require('express');
// const taskRoutes = require("./TaskRoutes");
const tasksController = require("../controllers/tasksController");
const employeesController = require("../controllers/employeesController");

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "Test for message the user will see only when logged in",
    // user values passed through from auth middleware
    user: req.user
  });
});


// // Matches with "/api/tasks"
// router.route("/findall")
//   .get(tasksController.findAll)
//   .post(tasksController.create);

// // Matches with "/api/tasks/:id"
// router.route("/:id")
//   .get(tasksController.findById)
//   .put(tasksController.update)
//   .delete(tasksController.remove);

// // Matches with "/api/tasks/dept/:department"

// router.route("/dept/:department")
//   .get(tasksController.findByDepartment)
//   .put(tasksController.update)
//   .delete(tasksController.remove);


module.exports = router;
