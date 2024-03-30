const express = require('express');
const TextMasterrouter = express.Router();
const mongoose=require("mongoose");
const TextMasterController = require('../controllers/add_text_master_controller');
const verifyToken = require("../middleware/verifyToken");


TextMasterrouter.post('/add_text_master',verifyToken, TextMasterController.createAddTextMaster);
TextMasterrouter.patch('/edit_text_master/:id',verifyToken, TextMasterController.editAddTextMaster);
TextMasterrouter.get('/show_text_master/',verifyToken, TextMasterController.getAddTextMaster);
TextMasterrouter.delete('/delete_text_master/:id',verifyToken, TextMasterController.deleteAddTextMaster);


module.exports = TextMasterrouter;