const express = require('express');
const partyrouter = express.Router();
const PartyController = require('../controllers/party_controller');
const verifyToken = require("../middleware/verifyToken");

// Route to create a new party
partyrouter.post('/create_parties',verifyToken, PartyController.createParty);

// Route to get all parties
partyrouter.get('/show_parties',verifyToken, PartyController.getAllParties);

// Route to get a specific party by ID
partyrouter.get('/show_parties/:id',verifyToken, PartyController.getPartyById);

// Route to update a party by ID
partyrouter.patch('/edit_parties/:id',verifyToken, PartyController.updateParty);

// Route to delete a party by ID
partyrouter.delete('/delete_parties/:id',verifyToken, PartyController.deleteParty);

// Export the router to use in your main application
module.exports = partyrouter;
