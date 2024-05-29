const UsersInfo = require('../models/user_modal');
const argon2 = require('argon2');
const jwt = require("jsonwebtoken");

const UsersController = {
    // Create a new user
    createUser: async (req, res) => {
        try {
            const { emailId, password, phone, admin_allowed, company_id } = req.body;

            // Check if the email already exists
            const existingUser = await UsersInfo.findOne({ emailId });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }

            // Create a new user object
            const newUser = new UsersInfo({
                emailId,
                password,
                phone,
                admin_allowed,
                company_id
            });

            // Save the user to the database
            await newUser.save();

            res.status(201).json(newUser); // Return the newly created user
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    signIn: async function (req, res) {
        try {
          const { emailId, password } = req.body;
          const foundUser = await UsersInfo.findOne({
            emailId: emailId,
          });
          if (!foundUser) {
            return res.json({ success: false, message: "User not found!" });
          }
          const passwordMatch = argon2.compareSync(password, foundUser.password);
          if (!passwordMatch) {
            return res.json({ success: false, message: "Incorrect password!" });
          }
    
          // Generate JWT token
          const token = jwt.sign({ userId: foundUser.id }, "your-secret-key", {
            expiresIn: "15h",
          });
    
          console.log(token);
    
          return res.json({ success: true, data: foundUser, token: token });
        } catch (ex) {
          return res.json({ success: false, message: "error" });
        }
      },

    

    // Fetch all users
    getAllUsers: async (req, res) => {
        try {
            const users = await UsersInfo.find();
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Fetch a single user by email
    getUserByEmail: async (req, res) => {
        try {
            const { email } = req.params;
            const user = await UsersInfo.findOne({ emailId: email });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a user
    updateUser: async (req, res) => {
        try {
            const { email } = req.params;
            let updatedUser = await UsersInfo.findOne({ emailId: email });

            // If user not found
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Update user fields
            updatedUser.set(req.body);

            // Check if the password is being modified
            if (req.body.password && req.body.password !== updatedUser.password) {
                // Hash the new password
                updatedUser.password = await argon2.hash(req.body.password, saltRounds);
            }

            // Save the updated user
            updatedUser = await updatedUser.save();

            res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a user
    deleteUser: async (req, res) => {
        try {
            const { email } = req.params;
            const deletedUser = await UsersInfo.findOneAndDelete({ emailId: email });
            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },
}

module.exports = UsersController;