const express = require('express');
const PartyGroupMasterrouter = express.Router();
const mongoose=require("mongoose");
const PartyGroupMasterController = require('../controllers/add_party_group_master_controller');
const verifyToken = require("../middleware/verifyToken");

PartyGroupMasterrouter.post('/add_party_group_master',verifyToken, PartyGroupMasterController.createAddPartyGroupMaster);
PartyGroupMasterrouter.patch('/edit_party_group_master/:id',verifyToken, PartyGroupMasterController.editAddPartyGroupMaster);
PartyGroupMasterrouter.get('/show_party_group_master/', verifyToken,PartyGroupMasterController.getAddPartyGroupMaster);
PartyGroupMasterrouter.delete('/delete_party_group_master/:id',verifyToken, PartyGroupMasterController.deleteAddPartyGroupMaster);


module.exports = PartyGroupMasterrouter;