const CreateCompany = require('../models/create_company_model');
const multer = require('multer');
const path = require('path');

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/company_image'); // Specify destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image'); // 'image' should match the field name in your form for uploading images

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images only (jpeg, jpg, png, gif) allowed');
  }
}

const companyController = {
  createCompany: async (req, res) => {
    try {
      // Check if emailId, mobile1, and girPanNo are unique before creating the company
      const { emailId, mobile1 } = req.body;
      const emailExists = await CreateCompany.findOne({ emailId });
      const mobile1Exists = await CreateCompany.findOne({ mobile1 });
    //  const girPanNoExists = await CreateCompany.findOne({ girPanNo });

      if (emailExists) {
        return res.status(400).json({ message: 'Email ID already exists' });
      }
      if (mobile1Exists) {
        return res.status(400).json({ message: 'Mobile number already exists' });
      }
    //   if (girPanNoExists) {
    //     return res.status(400).json({ message: 'GIR/PAN number already exists' });
    //   }

      // Proceed with creating the company if all fields are unique
      upload(req, res, async (err) => {
        if (err) {
          res.status(400).json({ message: 'Error uploading image', error: err });
        } else {
          const {
            companyName,
            gstTin,
            periodFromDate,
            periodToDate,
            addressLine1,
            addressLine2,
            addressLine3,
            city,
            state,
            pin,
            tel1,
            tel2,
            mobile1,
            mobile2,
            girPanNo,
            emailId,
            webAddress,
            sntp,
            port,
            password,
            tdsReg,
            tdsCircle,
            typeOfCompany,
            imagePath,
            einvUser,
            einvPw,
            tf,
            einvId,
          } = req.body;

          const company = new CreateCompany({
            companyName,
            gstTin,
            periodFromDate,
            periodToDate,
            addressLine1,
            addressLine2,
            addressLine3,
            city,
            state,
            pin,
            tel1,
            tel2,
            mobile1,
            mobile2,
            girPanNo,
            emailId,
            webAddress,
            sntp,
            port,
            password,
            tdsReg,
            tdsCircle,
            typeOfCompany,
            image: req.file ? req.file.filename : '', // Save image filename if uploaded
            imagePath: req.file ? req.file.path : '', // Save image path if uploaded
            einvUser,
            einvPw,
            tf,
            einvId,
          });

          await company.save();
          res.status(201).json({ message: 'Company created successfully', data: company });
        }
      });
    } catch (error) {
      res.status(400).json({ message: 'Error creating company', error: error.message });
    }
  },
  




  editCompany : async (req, res) => {
    try {
      const { id } = req.params;
      const updatedFields = req.body;
  
      const company = await CreateCompany.findByIdAndUpdate(id, updatedFields, { new: true });
  
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
  
      res.json({ message: 'Company updated successfully', data: company });
    } catch (error) {
      res.status(500).json({ message: 'Error updating company', error: error.message });
    }
  },


  getCompany: async (req, res) => {
    try {
      const allItems = await CreateCompany.find();
     
      
    
      res.json({ message: 'This is company data', data: allItems });
    } catch (error) {
      res.status(400).json({ message: 'Error finding company', error: error.message });
    }
  },

 
  
  deleteCompany: async (req, res) => {
    try {
      const { id } = req.params;

      const company = await CreateCompany.findByIdAndDelete(id);

      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }

      res.json({ message: 'Company deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting company', error: error.message });
    }
  },

};

module.exports = companyController;
