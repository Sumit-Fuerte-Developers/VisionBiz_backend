const AccountGroup = require('../models/account_group_modal');
// const MainGroup = require('../models/main_group_modal');

   const createAccountGroup= async (req, res) => {
        try {
            const { GroupDescription, mainGroup, groupIfReverse,lock,schedule } = req.body;
            
            // Save GroupDescription in AccountGroup
            const newAccountGroup = new AccountGroup({ GroupDescription, mainGroup, groupIfReverse,lock,schedule });
            await newAccountGroup.save();
            res.status(201).json({ message: 'Account group created successfully', data: newAccountGroup });
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    // Read All Account Groups
const getAllAccountGroups = async (req, res) => {
    try {
        const accountGroups = await AccountGroup.find();
        res.status(200).json({ data: accountGroups });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Read Account Group by ID
const getAccountGroupById = async (req, res) => {
    const { id } = req.params;
    try {
        const accountGroup = await AccountGroup.findById(id);
        if (!accountGroup) {
            return res.status(404).json({ error: 'Account group not found' });
        }
        res.status(200).json({ data: accountGroup });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update Account Group by ID
const updateAccountGroup = async (req, res) => {
    const { id } = req.params;
    const { GroupDescription, mainGroup, groupIfReverse } = req.body;
    try {
        const updatedAccountGroup = await AccountGroup.findByIdAndUpdate(id, { GroupDescription, mainGroup, groupIfReverse }, { new: true });
        if (!updatedAccountGroup) {
            return res.status(404).json({ error: 'Account group not found' });
        }
        res.status(200).json({ message: 'Account group updated successfully', data: updatedAccountGroup });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete Account Group by ID
const deleteAccountGroup = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAccountGroup = await AccountGroup.findByIdAndDelete(id);
        if (!deletedAccountGroup) {
            return res.status(404).json({ error: 'Account group not found' });
        }
        res.status(200).json({ message: 'Account group deleted successfully', data: deletedAccountGroup });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
    
    


const buildHierarchyFromData = async (mainGroupId = null) => {
    try {
      const data = await AccountGroup.find({ mainGroup: mainGroupId });
      const hierarchy = [];
  
      for (const item of data) {
        const child = {
          _id: item._id,
          GroupDescription: item.GroupDescription,
          mainGroup: item.mainGroup,
          groupIfReverse: item.groupIfReverse,
          schedule: item.schedule,
          lock: item.lock,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          __v: item.__v
        };
        const grandchildren = await buildHierarchyFromData(item._id);
        if (grandchildren.length > 0) {
          child.children = grandchildren;
        }
        hierarchy.push(child);
      }
  
      return hierarchy;
    } catch (error) {
      throw new Error('Error building hierarchy from data');
    }
  };
  
  const getHierarchy = async (req, res) => {
    try {
      const hierarchy = await buildHierarchyFromData();
      res.json({ hierarchy });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    getHierarchy,
    createAccountGroup,
    getAllAccountGroups,
    getAccountGroupById,
    updateAccountGroup,
    deleteAccountGroup
  };
  
  