const Party = require('../models/partyModel');

// Controller to create a new party
createParty : async (req, res) => {
    try {
        const { partyName, groupName, openingBalance } = req.body;
        const party = new Party({ partyName, groupName, openingBalance });
        await party.save();
        res.status(201).json({ message: 'Party created successfully', data: party });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all parties
getAllParties : async (req, res) => {
    try {
        const parties = await Party.find();
        res.status(200).json({ data: parties });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a specific party by ID
getPartyById : async (req, res) => {
    try {
        const party = await Party.findById(req.params.id);
        if (!party) {
            return res.status(404).json({ message: 'Party not found' });
        }
        res.status(200).json({ data: party });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a party by ID
updateParty = async (req, res) => {
    try {
        const { partyName, groupName, openingBalance } = req.body;
        const updatedParty = await Party.findByIdAndUpdate(req.params.id, { partyName, groupName, openingBalance }, { new: true });
        if (!updatedParty) {
            return res.status(404).json({ message: 'Party not found' });
        }
        res.status(200).json({ message: 'Party updated successfully', data: updatedParty });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a party by ID
deleteParty = async (req, res) => {
    try {
        const deletedParty = await Party.findByIdAndDelete(req.params.id);
        if (!deletedParty) {
            return res.status(404).json({ message: 'Party not found' });
        }
        res.status(200).json({ message: 'Party deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
