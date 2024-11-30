const express = require('express');
const router = express.Router();
const {listarPublicacion}= require ("../controllers/publicacionesController")
router.get('/publicaciones',listarPublicacion)




module.exports=router;
