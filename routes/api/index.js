const router = require("express").Router();
const taskRoutes = require("./tasks");

// Task routes
router.use("/tasks", taskRoutes);

module.exports = router;
