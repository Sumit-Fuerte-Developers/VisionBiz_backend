const UpdatepartyWiseData = require('../models/update_party_wise_formdata_model');

const updatePartyWiseDataController = {
    createData: async (req, res) => {
        try {
            const { partyName } = req.body;
            const newData = new UpdatepartyWiseData({ partyName });
            await newData.save();
            res.status(201).json({ message: 'Party wise data created successfully', data: newData });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllData: async (req, res) => {
        try {
            const data = await UpdatepartyWiseData.find();
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getDataByPartyId: async (req, res) => {
        try {
            const data = await UpdatepartyWiseData.find({ partyName: req.params.partyId });
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateDataByPartyId: async (req, res) => {
        try {
            const { partyName } = req.body;
            const updatedData = await UpdatepartyWiseData.findOneAndUpdate({ partyName: req.params.partyId }, { partyName }, { new: true });
            res.status(200).json({ message: 'Party wise data updated successfully', data: updatedData });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteDataByPartyId: async (req, res) => {
        try {
            const deletedData = await UpdatepartyWiseData.findOneAndDelete({ partyName: req.params.partyId });
            res.status(200).json({ message: 'Party wise data deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = updatePartyWiseDataController;
