const router = require("express").Router();
const companyController = require("../../controllers/companyController");

// Matches with "/api/tasks"
router.route("/findall")
  .get(companyController.findAll)
  .post(companyController.create);

// Matches with "/api/tasks/:id"
router.route("/:id")
  .get(companyController.findById)
  .put(companyController.update)
  .delete(companyController.remove);

// Matches with "/api/tasks/dept/:department"

router.route("/property/:department")
  .get(companyController.findByDepartment)
  .put(companyController.update)
  .delete(companyController.remove);

module.exports = router;
