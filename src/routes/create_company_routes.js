const express = require('express');
const Companyrouter = express.Router();
const mongoose=require("mongoose");
const companyController = require('../controllers/create_company_controller');
const verifyToken = require("../middleware/verifyToken");

// Route to create a new company
Companyrouter.post('/create_company',verifyToken, companyController.createCompany);
Companyrouter.get('/show_companys',verifyToken, companyController.getCompany);
Companyrouter.patch('/edit_companys/:id',verifyToken, companyController.editCompany);
Companyrouter.delete('/delete_company/:id',verifyToken, companyController.deleteCompany);
module.exports = Companyrouter;
