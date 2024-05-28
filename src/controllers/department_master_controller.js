const DepartmentMaster = require('../models/department_master_modal');

const DepartmentMasterController = {
    // Create a new DepartmentMaster
    createDepartmentMaster: async (req, res) => {
        try {
            const newDepartmentMaster = new DepartmentMaster(req.body);
            await newDepartmentMaster.save();
            res.status(201).json({ message: 'Department Master created successfully', data: newDepartmentMaster });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all DepartmentMasters
    getAllDepartmentMasters: async (req, res) => {
        try {
            const departmentMasters = await DepartmentMaster.find();
            res.status(200).json(departmentMasters);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a DepartmentMaster by ID
    getDepartmentMasterById: async (req, res) => {
        try {
            const departmentMaster = await DepartmentMaster.findById(req.params.id);
            if (!departmentMaster) {
                return res.status(404).json({ error: 'Department Master not found' });
            }
            res.status(200).json(departmentMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a DepartmentMaster by ID
    updateDepartmentMasterById: async (req, res) => {
        try {
            const updatedDepartmentMaster = await DepartmentMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedDepartmentMaster) {
                return res.status(404).json({ error: 'Department Master not found' });
            }
            res.status(200).json({ message: 'Department Master updated successfully', data: updatedDepartmentMaster });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a DepartmentMaster by ID
    deleteDepartmentMasterById: async (req, res) => {
        try {
            const deletedDepartmentMaster = await DepartmentMaster.findByIdAndDelete(req.params.id);
            if (!deletedDepartmentMaster) {
                return res.status(404).json({ error: 'Department Master not found' });
            }
            res.status(200).json({ message: 'Department Master deleted successfully',data: deletedDepartmentMaster});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = DepartmentMasterController;
