const express = require('express');
const TexCodeRoute = express.Router();
const texCodeController = require('../controllers/tax_code_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new TexCode
TexCodeRoute.post('/create_tex_code', verifyToken, texCodeController.createTexCode);

// Get all TexCode
TexCodeRoute.get('/show_tex_code', verifyToken, texCodeController.getAllTexCodes);

// Get an TexCode by ID
TexCodeRoute.get('/show_tex_code/:id', verifyToken, texCodeController.getTexCodeById);

// Update an TexCode by ID
TexCodeRoute.patch('/edit_tex_code/:id', verifyToken, texCodeController.updateTexCodeById);

// Delete an TexCode by ID
TexCodeRoute.delete('/delete_tex_code/:id', verifyToken, texCodeController.deleteTexCodeById);

module.exports = TexCodeRoute;