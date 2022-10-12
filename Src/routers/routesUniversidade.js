const express = require("express");
const universidadeController = require('../controller/universidadesController.js');

const router = express.Router();

router

.get("/universities", universidadeController.getUniversities)
//.get("/universities/:id", universidadeController.register)
.post("/universities", universidadeController.register)
.put("/universities/:id", universidadeController.update)
.delete("/universities/:id", universidadeController.delete)


module.exports = router;