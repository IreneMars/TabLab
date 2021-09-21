const express = require("express");

const EsquemasController = require("../controllers/esquemas");

const { validateJWT } = require("../middlewares");

const router = express.Router();

router.post("/:datafileId", validateJWT, EsquemasController.createEsquema);

router.get("", validateJWT, EsquemasController.getEsquemas);

router.delete("/:id", validateJWT, EsquemasController.deleteEsquema);

router.get("/:id", validateJWT, EsquemasController.getEsquema);

router.put("/:id", validateJWT, EsquemasController.updateEsquema);

module.exports = router;