const express = require('express');
const AreaMasterrouter = express.Router();
const mongoose=require("mongoose");
const AreaMasterController = require('../controllers/add_area_master_controller');
const verifyToken = require("../middleware/verifyToken");


AreaMasterrouter.post('/add_area_master',verifyToken, AreaMasterController.createAddAreaMaster);
AreaMasterrouter.patch('/edit_area_master/:id',verifyToken, AreaMasterController.editAddAreaMaster);
AreaMasterrouter.get('/show_area_master/',verifyToken, AreaMasterController.getAddAreaMaster);
AreaMasterrouter.get('/show_area_master/:id',verifyToken, AreaMasterController.getAddAreaMasterbyid);
AreaMasterrouter.delete('/delete_area_master/:id', verifyToken,AreaMasterController.deleteAddAreaMaster);


module.exports = AreaMasterrouter;