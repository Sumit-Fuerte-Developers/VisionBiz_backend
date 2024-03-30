const express = require('express');
const usersRoute = express.Router();
const UsersController = require('../controllers/user_controller');

// Create a new user
usersRoute.post('/crete_users', UsersController.createUser);

// Get all users
usersRoute.get('/show_users', UsersController.getAllUsers);

usersRoute.post("/signIn", UsersController.signIn);

// Get a user by email
usersRoute.get('/show_users/:email', UsersController.getUserByEmail);

// Update a user
usersRoute.patch('/edit_users/:email', UsersController.updateUser);

// Delete a user
usersRoute.delete('/delete_users/:email', UsersController.deleteUser);

module.exports = usersRoute;
