const express = require('express');
const BranchMasterRoute = express.Router();
const BranchMasterController = require('../controllers/branch_master_controller');
const verifyToken = require("../middleware/verifyToken");
// Create a new BranchMaster
BranchMasterRoute.post('/create_branch',verifyToken, BranchMasterController.createBranchMaster);

// Get all BranchMaster
BranchMasterRoute.get('/show_branch',verifyToken, BranchMasterController.getAllBranchMasters);

// Get an BranchMaster by ID
BranchMasterRoute.get('/show_branch/:id',verifyToken, BranchMasterController.getBranchMasterById);

// Update an BranchMaster by ID
BranchMasterRoute.patch('/edit_branch/:id',verifyToken, BranchMasterController.updateBranchMasterById);

// Delete an BranchMaster by ID
BranchMasterRoute.delete('/delete_branch/:id',verifyToken, BranchMasterController.deleteBranchMasterById);

module.exports = BranchMasterRoute;