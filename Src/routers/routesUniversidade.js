const express = require("express");
const universidadeController = require('../controller/universidadesController.js');

const router = express.Router();

router.post("/universities", universidadeController.register);
router.get("/universities/query", universidadeController.indexCountry);
router.get("/universities", universidadeController.index);
router.get("/universities/:id", universidadeController.show);
router.put("/universities/:id", universidadeController.update);
router.delete("/universities/:id", universidadeController.destroy);

module.exports = router;