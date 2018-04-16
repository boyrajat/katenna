const router = require("express").Router();
const employeesController = require("../../controllers/employeesController");

// Matches with "/api/tasks"
router.route("/findall")
  .get(employeesController.findAll)

router.route("/create")
  .post(employeesController.create);

router.route("/updatetasks")
  .post(employeesController.updateTasks);

// Matches with "/api/tasks/:id"
router.route("/:id")
  .get(employeesController.findById)
  .put(employeesController.update)
  .delete(employeesController.remove);

// Matches with "/api/tasks/dept/:department"

router.route("/employee/:department")
  .get(employeesController.findByDepartment)
  .put(employeesController.update)
  .delete(employeesController.remove);

module.exports = router;
