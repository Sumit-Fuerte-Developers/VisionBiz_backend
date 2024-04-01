const express = require('express');
const creaditorsrouter = express.Router();
const creditorsOpeningController = require('../controllers/creditors_opening_controllers');
const verifyToken = require("../middleware/verifyToken");

// Routes for CRUD operations
creaditorsrouter.post('/create_creaditor_opening',verifyToken, creditorsOpeningController.createOpening);
creaditorsrouter.get('/show_creaditors_opening',verifyToken, creditorsOpeningController.getAllOpenings);
creaditorsrouter.get('/show_creaditrs_opening/:id',verifyToken, creditorsOpeningController.getOpeningById);
creaditorsrouter.patch('/edit_creaditors_opening/:id',verifyToken, creditorsOpeningController.updateOpening);
creaditorsrouter.delete('/delete_creaditors_opening/:id',verifyToken, creditorsOpeningController.deleteOpening);

module.exports = creaditorsrouter;
