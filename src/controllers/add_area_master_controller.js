const AddAreaMaster = require('../models/add_area_master_model');

const AreaMasterController = {
    createAddAreaMaster: async (req, res) => {
    try {
      const addAreaMaster = new AddAreaMaster(req.body);

      // Save the document to the database
      const savedAddAreaMaster = await addAreaMaster.save();
      res.status(201).json(savedAddAreaMaster);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  
  editAddAreaMaster: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updatedAddAreaMaster = await AddAreaMaster.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );

      if (!updatedAddAreaMaster) {
        return res.status(404).json({ message: 'AddAreaMaster not found' });
      }

      res.json(updatedAddAreaMaster);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAddAreaMaster:async(req,res)=>{
    try {
        const allAddAreaMaster = await AddAreaMaster.find();
        res.json({ message: 'All AddAreaMaster data', data: allAddAreaMaster });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }


  },

  deleteAddAreaMaster:async(req,res)=>{
    try {
        const { id } = req.params;
  
        const areaMaster = await AddAreaMaster.findByIdAndDelete(id);
  
        if (!areaMaster) {
          return res.status(404).json({ message: 'Area master not found' });
        }
  
        res.json({ message: 'Area master deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting Area master', error: error.message });
      }
  }
}
module.exports = AreaMasterController;