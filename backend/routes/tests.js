const express = require("express");

const TestsController = require("../controllers/tests");

const { validateJWT } = require("../middlewares");

const router = express.Router();

router.post("/:datafileId", validateJWT, TestsController.createTest);

router.delete("/:id", validateJWT, TestsController.deleteTest);

router.get("/:id", validateJWT, TestsController.getTest);

router.put("/:id", validateJWT, TestsController.updateTest);

module.exports = router;