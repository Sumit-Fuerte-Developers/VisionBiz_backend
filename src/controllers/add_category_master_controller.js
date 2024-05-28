const AddCategoryMaster = require('../models/add_category_master_model');

const CategoryMasterController = {
    createAddCategoryMaster: async (req, res) => {
    try {
      const addCategoryMaster = new AddCategoryMaster(req.body);

      // Save the document to the database
      const savedAddCategoryMaster = await addCategoryMaster.save();
      res.status(201).json(savedAddCategoryMaster);
    } catch (err) {
      res.status(400).json({ message: err.message });a
    }
  },
  
  editAddcategoryMaster: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updatedAddCategoryMaster = await AddCategoryMaster.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );

      if (!updatedAddCategoryMaster) {
        return res.status(404).json({ message: 'AddCategoryMaster not found' });
      }

      res.json(updatedAddCategoryMaster);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAddcategoryMaster:async(req,res)=>{
    try {
        const allAddCategoryMaster = await AddCategoryMaster.find();
        res.json({ message: 'All AddCategoryMaster data', data: allAddCategoryMaster });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getAddcategoryMasterById : async (req, res) => {
    try {
      const allAddCategoryMaster = await AddCategoryMaster.findById(req.params.id);
      if (!allAddCategoryMaster) {
        return res.status(404).json({ message: 'Salesman not found' });
      }
      res.json(allAddCategoryMaster);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteAddCategoryMaster:async(req,res)=>{
    try {
        const { id } = req.params;
  
        const categoryMaster = await AddCategoryMaster.findByIdAndDelete(id);
  
        if (!categoryMaster) {
          return res.status(404).json({ message: 'Category master not found' });
        }
  
        res.json({ message: 'Category master deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting Category master', error: error.message });
      }
  }
}
module.exports = CategoryMasterController;