const express = require('express');
const DepartmentMasterRoute = express.Router();
const DepartmentMasterController = require('../controllers/department_master_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new DepartmentMaster
DepartmentMasterRoute.post('/create_department', DepartmentMasterController.createDepartmentMaster);

// Get all DepartmentMaster
DepartmentMasterRoute.get('/show_department',DepartmentMasterController.getAllDepartmentMasters);

// Get an DepartmentMaster by ID
DepartmentMasterRoute.get('/show_department/:id', DepartmentMasterController.getDepartmentMasterById);

// Update an DepartmentMaster by ID
DepartmentMasterRoute.patch('/edit_department/:id', DepartmentMasterController.updateDepartmentMasterById);

// Delete an DepartmentMaster by ID
DepartmentMasterRoute.delete('/delete_department/:id', DepartmentMasterController.deleteDepartmentMasterById);

module.exports = DepartmentMasterRoute;