const express = require('express');
const CategoryMasterrouter = express.Router();
const mongoose=require("mongoose");
const CategoryMasterController = require('../controllers/add_category_master_controller');
const verifyToken = require("../middleware/verifyToken");


CategoryMasterrouter.post('/add_category_master',verifyToken, CategoryMasterController.createAddCategoryMaster);
CategoryMasterrouter.patch('/edit_category_master/:id',verifyToken,CategoryMasterController.editAddcategoryMaster);
CategoryMasterrouter.get('/show_category_master/',verifyToken, CategoryMasterController.getAddcategoryMaster);
CategoryMasterrouter.delete('/delete_category_master/:id',verifyToken, CategoryMasterController.deleteAddCategoryMaster);
CategoryMasterrouter.get('/show_category_master/:id',verifyToken, CategoryMasterController.getAddcategoryMasterById);


module.exports = CategoryMasterrouter;