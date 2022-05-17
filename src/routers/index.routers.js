// Ruta de conexión 
const express = require("express");
const router = express.Router();
const controller=require("../controllers/index.controllers");

router.get("/",controller.index)
module.exports = router