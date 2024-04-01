const express = require('express');
const openingImeirouter = express.Router();
const opningIMEIController = require('../controllers/opening_imei_controller');

// Routes for Item CRUD operations
openingImeirouter.post('/create_opening_imei', opningIMEIController.createItem);
openingImeirouter.get('/show_opening_imei', opningIMEIController.getAllItems);
openingImeirouter.get('/show_opening_imei/:id', opningIMEIController.getItemById);
openingImeirouter.patch('/edit_opening_imei/:id', opningIMEIController.updateItem);
openingImeirouter.delete('/delete_opening_imei/:id', opningIMEIController.deleteItem);

module.exports = openingImeirouter;
