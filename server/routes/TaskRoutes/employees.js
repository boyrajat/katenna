const router = require("express").Router();
const employeesController = require("../../controllers/employeesController");

// Matches with "/api/tasks"
router.route("/findall")
  .get(employeesController.findAll)
  .post(employeesController.create);

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
