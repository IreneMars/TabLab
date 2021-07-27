const express = require("express");

const TestsController = require("../controllers/tests");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/:datafileId", checkAuth, TestsController.createTest);

router.delete("/:id", checkAuth, TestsController.deleteTest);

router.get("/:id", checkAuth, TestsController.getTest);

router.put("/:id", checkAuth, TestsController.updateTest);

module.exports = router;
