const express = require('express');
const NarrationMasterRoute = express.Router();
const BankMasterController = require('../controllers/narration_master_controller');
const verifyToken = require('../middleware/verifyToken');
const NarrationMasterController = require('../controllers/narration_master_controller');

NarrationMasterRoute.post('/create_narrationMaster', verifyToken, NarrationMasterController.createNarrationMaster);

NarrationMasterRoute.get('/show_narrationMaster', verifyToken, NarrationMasterController.getAllNarrationMaster);

NarrationMasterRoute.get('/show_narrationMaster/:id', verifyToken, NarrationMasterController.getNarrationMasterById);

NarrationMasterRoute.patch('/edit_narrationMaster/:id', verifyToken, NarrationMasterController.updateNarrationMasterById);

NarrationMasterRoute.delete('/delete_narrationMaster/:id', verifyToken, NarrationMasterController.deleteNarrationMasterById);

module.exports = NarrationMasterRoute;