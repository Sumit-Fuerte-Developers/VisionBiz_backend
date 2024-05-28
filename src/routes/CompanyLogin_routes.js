const express = require('express');
const CompanyLoginRoutes = express.Router();
const CompanyLoginController = require('../controllers/CompanyLogin_controller');
// const verifyToken = require("../middleware/verifyToken");
// Create a new BranchMaster
CompanyLoginRoutes.post('/companysignIn', CompanyLoginController.CompanysignIn);

// Get all BranchMaster
// BranchMasterRoute.get('/show_branch',verifyToken, BranchMasterController.getAllBranchMasters);

// // Get an BranchMaster by ID
// BranchMasterRoute.get('/show_branch/:id',verifyToken, BranchMasterController.getBranchMasterById);

// // Update an BranchMaster by ID
// BranchMasterRoute.patch('/edit_branch/:id',verifyToken, BranchMasterController.updateBranchMasterById);

// // Delete an BranchMaster by ID
// BranchMasterRoute.delete('/delete_branch/:id',verifyToken, BranchMasterController.deleteBranchMasterById);

module.exports = CompanyLoginRoutes;