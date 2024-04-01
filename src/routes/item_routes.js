const express = require('express');
const ItemRoute = express.Router();
const ItemController = require('../controllers/item_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new Item
ItemRoute.post('/create_item', verifyToken, ItemController.createItem);

// Get all Item
ItemRoute.get('/show_item', verifyToken, ItemController.getAllItems);

// Get an Item by ID
ItemRoute.get('/show_item/:id', verifyToken, ItemController.getItemById);

// Update an Item by ID
ItemRoute.patch('/edit_item/:id', verifyToken, ItemController.updateItemById);

// Delete an Item by ID
ItemRoute.delete('/delete_item/:id', verifyToken, ItemController.deleteItemById);

module.exports = ItemRoute;