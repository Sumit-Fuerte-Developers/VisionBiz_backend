const express = require('express');
const partywiseProductGroupRateDiscountrouter = express.Router();
const partywiseProductGroupRateDiscountController = require('../controllers/party_wise_productGroup_wiseDiscount_controller');
const verifyToken = require("../middleware/verifyToken");
// Route to create a new partywise product group rate discount
partywiseProductGroupRateDiscountrouter.post('/create_partywiseProductGroupRateDiscount',verifyToken, partywiseProductGroupRateDiscountController.createPartywiseProductGroupRateDiscount);

// Route to get all partywise product group rate discounts
partywiseProductGroupRateDiscountrouter.get('/show_partywiseProductGroupRateDiscount',verifyToken, partywiseProductGroupRateDiscountController.getAllPartywiseProductGroupRateDiscounts);

// Route to get a specific partywise product group rate discount by ID
partywiseProductGroupRateDiscountrouter.get('/show_partywiseProductGroupRateDiscount/:id',verifyToken, partywiseProductGroupRateDiscountController.getPartywiseProductGroupRateDiscountById);

// Route to update a partywise product group rate discount by ID
partywiseProductGroupRateDiscountrouter.patch('/edit_partywiseProductGroupRateDiscount/:id',verifyToken, partywiseProductGroupRateDiscountController.updatePartywiseProductGroupRateDiscountById);

// Route to delete a partywise product group rate discount by ID
partywiseProductGroupRateDiscountrouter.delete('/delete_partywiseProductGroupRateDiscount/:id',verifyToken, partywiseProductGroupRateDiscountController.deletePartywiseProductGroupRateDiscountById);

module.exports = partywiseProductGroupRateDiscountrouter;
