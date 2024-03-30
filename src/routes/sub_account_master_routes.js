const express = require('express');
const SubAccountMasterRoute = express.Router();
const SubAccountMasterController = require('../controllers/sub_account_master_controller');
const verifyToken = require("../middleware/verifyToken");
// Create a new SubAccountMaster
SubAccountMasterRoute.post('/create_subAccount',verifyToken, SubAccountMasterController.createSubAccountMaster);

// Get all SubAccountMasters
SubAccountMasterRoute.get('/show_subAccount',verifyToken, SubAccountMasterController.getAllSubAccountMasters);

// Get a SubAccountMaster by ID
SubAccountMasterRoute.get('/show_subAccount/:id',verifyToken, SubAccountMasterController.getSubAccountMasterById);

// Update a SubAccountMaster by ID
SubAccountMasterRoute.patch('/edit_subAccount/:id',verifyToken, SubAccountMasterController.updateSubAccountMasterById);

// Delete a SubAccountMaster by ID
SubAccountMasterRoute.delete('/delete_subAccount/:id',verifyToken, SubAccountMasterController.deleteSubAccountMasterById);

module.exports = SubAccountMasterRoute;
