const router = require("express").Router();
const taskRoutes = require("./tasks");
const employeeRoutes = require("./employees");
const companyRoutes = require("./company");

// Task routes
router.use("/tasks", taskRoutes);
router.use("/employees", employeeRoutes);
router.use("/company", companyRoutes);

module.exports = router;
