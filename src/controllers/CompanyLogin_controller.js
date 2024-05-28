const CreateCompany = require('../models/create_company_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CompanyLoginController = {
  CompanysignIn: async function (req, res) {
    try {
      const { emailId, password } = req.body;

      // Find the user in the database
      const foundUser = await CreateCompany.findOne({ emailId: emailId });
      if (!foundUser) {
        return res.status(404).json({ success: false, message: "User not found!" });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, foundUser.password);
      if (!passwordMatch) {
        return res.status(401).json({ success: false, message: "Incorrect password!" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: foundUser.id }, "your-secret-key", {
        expiresIn: "5h",
      });

      console.log(token);

      return res.status(200).json({ success: true, data: foundUser, token: token });
    } catch (ex) {
      console.error(ex);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  },
};

module.exports = CompanyLoginController;
