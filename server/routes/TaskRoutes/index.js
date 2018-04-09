const router = require("express").Router();
const taskRoutes = require("./tasks");
const employeeRoutes = require("./employees");

// Task routes
router.use("/tasks", taskRoutes);
router.use("/employees", employeeRoutes);

module.exports = router;
