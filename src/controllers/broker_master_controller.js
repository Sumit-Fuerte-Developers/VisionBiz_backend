const BrokerMaster  = require('../models/broker_master_modal');

const BrokerMasterController = {
    createBrokerMaster: async (req, res) => {
        try {
            const newBrokerMaster = new BrokerMaster(req.body);
            await newBrokerMaster.save();
            res.status(201).json(newBrokerMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    },

    getAllBrokerMaster: async (req, res) => {
        try {
            const brokerMaster = await BrokerMaster.find();
            res.status(200).json(brokerMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    },

    getBrokerMasterById: async (req, res) => {
        try {
            const brokerMaster = await BrokerMaster.findById(req.params.id);
            if (!brokerMaster) {
                return res.status(404).json({error: 'Broker Master not found'});
            }
            res.status(200).json(brokerMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server Error'});
        }
    },

    updateBrokerMasterById: async (req, res) => {
        try {
            const updateBrokerMaster = await BrokerMaster.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if (!updateBrokerMaster) {
                return res.status(404).json({error: 'Broker Master not found'});
            }
            res.status(200).json(updateBrokerMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    },

    deleteBrokerMasterById: async (req, res) => {
        try {
            const deleteBrokerMaster = await BrokerMaster.findByIdAndDelete(req.params.id);
            if (!deleteBrokerMaster) {
                return res.status(404).json({error: 'Broker Master not found'});
            }
            res.status(200).json({message: 'Broker Master deleted successfully'});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    }
};

module.exports = BrokerMasterController;