const express = require("express");

const EsquemasController = require("../controllers/esquemas");

const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/:datafileId", checkAuth, EsquemasController.createEsquema);

router.get("", checkAuth, EsquemasController.getEsquemas);

router.delete("/:id", checkAuth, EsquemasController.deleteEsquema);

router.get("/:id", checkAuth, EsquemasController.getEsquema);

router.put("/:id", checkAuth, EsquemasController.updateEsquema);

module.exports = router;
