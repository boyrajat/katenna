const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
router.route("/findall")
  .get(tasksController.findAll)
  .post(tasksController.create);

// Matches with "/api/tasks/:id"
router.route("/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

// Matches with "/api/tasks/dept/:department"

router.route("/dept/:department")
  .get(tasksController.findByDepartment)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = router;
