const express = require('express');
const AccountGrouprRoute = express.Router();
const Accountgroup = require('../controllers/account_group_controller');
// const verifyToken = require("../middleware/verifyToken");

// Create a new account
AccountGrouprRoute.post('/create_accounts', Accountgroup.createAccountGroup);
AccountGrouprRoute.get('/hierarchy', Accountgroup.getHierarchy)
AccountGrouprRoute.get('/getgroups', Accountgroup.getAllAccountGroups);
AccountGrouprRoute.get('/getGroupsbyid/:id', Accountgroup.getAccountGroupById);
AccountGrouprRoute.patch('/editGroup/:id', Accountgroup.updateAccountGroup);
AccountGrouprRoute.delete('/deleteGroup/:id', Accountgroup.deleteAccountGroup);


module.exports = AccountGrouprRoute;