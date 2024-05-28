const express = require('express');
const BrokerMasterRoute = express.Router();
const BrokerMasterController = require('../controllers/broker_master_controller');
const verifyToken = require('../middleware/verifyToken');

BrokerMasterRoute.post('/create_brokerMaster', verifyToken, BrokerMasterController.createBrokerMaster);

BrokerMasterRoute.get('/show_brokerMaster', verifyToken, BrokerMasterController.getAllBrokerMaster);

BrokerMasterRoute.get('/show_brokerMaster/:id', verifyToken, BrokerMasterController.getBrokerMasterById);

BrokerMasterRoute.patch('/edit_brokerMaster/:id', verifyToken, BrokerMasterController.updateBrokerMasterById);

BrokerMasterRoute.delete('/delete_brokerMaster/:id', verifyToken, BrokerMasterController.deleteBrokerMasterById);

module.exports = BrokerMasterRoute;