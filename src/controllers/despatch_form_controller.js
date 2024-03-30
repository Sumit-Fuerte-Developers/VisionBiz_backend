const DespatchForm = require('../models/despatch_form_modal');

const DespatchFormController = {
    // Create a new DespatchForm
    createDespatchForm: async (req, res) => {
        try {
            const newDespatchForm = new DespatchForm(req.body);
            await newDespatchForm.save();
            res.status(201).json(newDespatchForm);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all DespatchForms
    getAllDespatchForms: async (req, res) => {
        try {
            const despatchForms = await DespatchForm.find();
            res.status(200).json(despatchForms);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a DespatchForm by ID
    getDespatchFormById: async (req, res) => {
        try {
            const despatchForm = await DespatchForm.findById(req.params.id);
            if (!despatchForm) {
                return res.status(404).json({ error: 'DespatchForm not found' });
            }
            res.status(200).json(despatchForm);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a DespatchForm by ID
    updateDespatchFormById: async (req, res) => {
        try {
            const updatedDespatchForm = await DespatchForm.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedDespatchForm) {
                return res.status(404).json({ error: 'DespatchForm not found' });
            }
            res.status(200).json(updatedDespatchForm);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a DespatchForm by ID
    deleteDespatchFormById: async (req, res) => {
        try {
            const deletedDespatchForm = await DespatchForm.findByIdAndDelete(req.params.id);
            if (!deletedDespatchForm) {
                return res.status(404).json({ error: 'DespatchForm not found' });
            }
            res.status(200).json({ message: 'DespatchForm deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = DespatchFormController;
