const express = require('express');
const partywiseProductRateDiscountrouter = express.Router();
const partyWiseProductController = require('../controllers/party_wise_product_rate_discount_controller');
const verifyToken = require("../middleware/verifyToken");



// Route to create a new partywise product rate discount
partywiseProductRateDiscountrouter.post('/create_partywiseProductRateDiscount',verifyToken, partyWiseProductController.createPartywiseProductRateDiscount);

// Route to get all partywise product rate discounts
partywiseProductRateDiscountrouter.get('/show_partywiseProductRateDiscount',verifyToken, partyWiseProductController.getAllPartywiseProductRateDiscounts);

// Route to get a specific partywise product rate discount by ID
partywiseProductRateDiscountrouter.get('/show_partywiseProductRateDiscount/:id',verifyToken, partyWiseProductController.getPartywiseProductRateDiscountById);

// Route to update a partywise product rate discount by ID
partywiseProductRateDiscountrouter.patch('/edit_partywiseProductRateDiscount/:id',verifyToken, partyWiseProductController.updatePartywiseProductRateDiscountById);

// Route to delete a partywise product rate discount by ID
partywiseProductRateDiscountrouter.delete('/delete_partywiseProductRateDiscount/:id',verifyToken, partyWiseProductController.deletePartywiseProductRateDiscountById);

module.exports = partywiseProductRateDiscountrouter;
