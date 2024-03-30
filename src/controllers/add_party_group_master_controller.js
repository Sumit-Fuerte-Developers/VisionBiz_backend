const AddPartyGroupMaster = require('../models/add_party_group_master_model');

const PartyGroupMasterController = {
    createAddPartyGroupMaster: async (req, res) => {
    try {
      const addPartyGroupMaster = new AddPartyGroupMaster(req.body);

      // Save the document to the database
      const savedAddPartyGroupMaster = await addPartyGroupMaster.save();
      res.status(201).json(savedAddPartyGroupMaster);
    } catch (err) {
      res.status(400).json({ message: err.message });a
    }
  },
  
  editAddPartyGroupMaster: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updatedAddPartyGroupMaster = await AddPartyGroupMaster.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );

      if (!updatedAddPartyGroupMaster) {
        return res.status(404).json({ message: 'Add Party Group Master not found' });
      }

      res.json(updatedAddPartyGroupMaster);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAddPartyGroupMaster:async(req,res)=>{
    try {
        const allAddPartyGroupMaster = await AddPartyGroupMaster.find();
        res.json({ message: 'All AddCategoryMaster data', data: allAddPartyGroupMaster });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }


  },

  deleteAddPartyGroupMaster:async(req,res)=>{
    try {
        const { id } = req.params;
  
        const partygroupMaster = await AddPartyGroupMaster.findByIdAndDelete(id);
  
        if (!partygroupMaster) {
          return res.status(404).json({ message: 'party group master not found' });
        }
  
        res.json({ message: 'Party Group master deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting Party Group master', error: error.message });
      }
  }
}
module.exports = PartyGroupMasterController;