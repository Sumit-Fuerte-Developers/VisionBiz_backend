const TransporterMaster = require('../models/transporter_master_model');

const transporterController={


// Create a new transporter
createTransporter : async (req, res) => {
    try {
        const transporter = new TransporterMaster(req.body);
        await transporter.save();
        res.status(201).json({ message: 'Transporter created successfully', data: transporter });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

// Get all transporters
getAllTransporters :async (req, res) => {
    try {
        const transporters = await TransporterMaster.find();
        res.status(200).json({ data: transporters });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

// Get a specific transporter by ID
getTransporterById : async (req, res) => {
    try {
        const transporter = await TransporterMaster.findById(req.params.id);
        if (!transporter) {
            return res.status(404).json({ message: 'Transporter not found' });
        }
        res.status(200).json({ data: transporter });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

// Update a specific transporter by ID
updateTransporterById : async (req, res) => {
    try {
        const transporter = await TransporterMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transporter) {
            return res.status(404).json({ message: 'Transporter not found' });
        }
        res.status(200).json({ message: 'Transporter updated successfully', data: transporter });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

// Delete a specific transporter by ID
deleteTransporterById : async (req, res) => {
    try {
        const transporter = await TransporterMaster.findByIdAndDelete(req.params.id);
        if (!transporter) {
            return res.status(404).json({ message: 'Transporter not found' });
        }
        res.status(200).json({ message: 'Transporter deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

}
module.exports = transporterController;