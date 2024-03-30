const AddTextMaster = require('../models/add_text_master_model');

const TextMasterController = {
  createAddTextMaster: async (req, res) => {
    try {
      const addTextMaster = new AddTextMaster(req.body);

      // Save the document to the database
      const savedAddTextMaster = await addTextMaster.save();
      res.status(201).json(savedAddTextMaster);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  editAddTextMaster: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updatedAddTextMaster = await AddTextMaster.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );

      if (!updatedAddTextMaster) {
        return res.status(404).json({ message: 'AddTextMaster not found' });
      }

      res.json(updatedAddTextMaster);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAddTextMaster:async(req,res)=>{
    try {
        const allAddTextMaster = await AddTextMaster.find();
        res.json({ message: 'All AddTextMaster data', data: allAddTextMaster });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }


  },

  deleteAddTextMaster:async(req,res)=>{
    try {
        const { id } = req.params;
  
        const textMaster = await AddTextMaster.findByIdAndDelete(id);
  
        if (!textMaster) {
          return res.status(404).json({ message: 'Company not found' });
        }
  
        res.json({ message: 'Company deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting company', error: error.message });
      }
  }
};

module.exports = TextMasterController;
