const express = require('express');
const UpdatePartyWIserouter = express.Router();
const updatePartyWiseDataController = require('../controllers/update_party_wise_formdata_controller');

// Routes for Party Wise Data CRUD operations
UpdatePartyWIserouter.post('/create_update_party_wise_data', updatePartyWiseDataController.createData);
UpdatePartyWIserouter.get('/show_update_party_wise_data', updatePartyWiseDataController.getAllData);
UpdatePartyWIserouter.get('/show_update_party_wise_data/:partyId', updatePartyWiseDataController.getDataByPartyId);
UpdatePartyWIserouter.patch('/edit_update_party_wise_data/:partyId', updatePartyWiseDataController.updateDataByPartyId);
UpdatePartyWIserouter.delete('/delete_update_party_wise_data/:partyId', updatePartyWiseDataController.deleteDataByPartyId);

module.exports = UpdatePartyWIserouter;
