// const Accountmaster = require("../models/account_master_modal");
// const SuperMaster = require("../models/super_master_modal");
// const AlternetAddress=require("../models/alternate_address_model")
// const AccountMasterController = {
//     // Create a new account
//     createAccount:  async (req, res) => {
//       try {
//         const { FLAG, PartyName,aGroup,GroupName, YR_OB, TOT_CR, TOT_DR, SummaryPrint, aLock, BUDGET,userId,CompanyCode,Otherdata,additionalData } = req.body;
//         console.log(req.body)
//         let newAccountGroup;
    
//         if (aGroup) {
//           const parentGroup = await Accountmaster.findById(aGroup);
         
//           if (!parentGroup) {
//             return res.status(404).json({ message: "Parent group not found" });
//           }
    
    
//           newAccountGroup = new Accountmaster({
//             FLAG,
//             PartyName,
//             aGroup: parentGroup.PartyCode, // Use parent group's PartyCode
//             GroupName:parentGroup.PartyName,
//             YR_OB,
//             TOT_CR,
//             TOT_DR,
//             SummaryPrint,
//             aLock,
//             BUDGET,
//             userId,
//             CompanyCode
//           });
//         } else {
//           newAccountGroup = new Accountmaster({ FLAG, PartyName, GroupName, YR_OB, TOT_CR, TOT_DR, SummaryPrint, aLock, BUDGET,userId,CompanyCode });
//         }
    
//         const savedAccMaster = await newAccountGroup.save();
//         const superMasterData = new SuperMaster({
//           PartyCode: savedAccMaster.PartyCode, // Use PartyCode from savedAccMaster
//           ...Otherdata, 


//         //   image: {
//         //     data: buffer, // Assuming 'buffer' contains the image data
//         //     contentType: mimetype, // Assuming 'mimetype' is the image MIME type
//         //   }, // Spread additionalData from req.body
//           // Other fields in SuperMaster


//         });
//         const savedSuperMaster = await superMasterData.save();

//         const AlternetMasterData=new AlternetAddress({
//           PartyCode: savedAccMaster.PartyCode, // Use PartyCode from savedAccMaster
//           ...additionalData,

//         });

    
//         const savedAlternetmaster = await AlternetMasterData.save();
        
//         res.status(201).json({
//           message: "Account group created successfully",
//           data: savedAccMaster,
//           superMasterData: savedSuperMaster ,
//           alternetmasterdata: savedAlternetmaster,// Include saved SuperMaster data in the response
//         });
//       } catch (error) {
//         console.error(error);
//         res.status(400).json({ message: "Error creating account group" });
//       }
//     },

//     getPartyNamesWithFlagL :async (req, res) => {
//       try {
//         const dataWithFlagL = await Accountmaster.find({ FLAG: 'L' });
    
//         if (!dataWithFlagL || dataWithFlagL.length === 0) {
//           return res.status(404).json({ message: "No data found with FLAG 'L'" });
//         }
    
//         res.status(200).json({ data: dataWithFlagL });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error retrieving data" });
//       }
//     },

//     getPartyNamesWithFlagG: async (req, res) => {
//       try {
//         const dataWithFlagG = await Accountmaster.find({ FLAG: 'G', aGroup: { $exists: true } }).select('PartyName aGroup');
    
//         if (!dataWithFlagG || dataWithFlagG.length === 0) {
//           return res.status(404).json({ message: "No data found with FLAG 'G' and valid aGroup" });
//         }
    
//         res.status(200).json({ data: dataWithFlagG });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error retrieving data" });
//       }
//     },
    
    
    
//     // Get all accounts
//     getAllAccounts: async (req, res) => {
//         try {
//             const accounts = await Accountmaster.find();
//             res.status(200).json({message:'all Account data',accounts});
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Server error' });
//         }
//     },

//     // Get an account by ID
//     getAccountById: async (req, res) => {
//         try {
//             const account = await Accountmaster.findById(req.params.id);
//             if (!account) {
//                 return res.status(404).json({ error: 'Account not found' });
//             }
//             res.status(200).json({message:'this is data by id',account});
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Server error' });
//         }
//     },

//     // Update an account by ID
//     updateAccountById: async (req, res) => {
//       try {
//         const { id } = req.params;
//         const { FLAG, PartyName,aGroup, YR_OB, TOT_CR, TOT_DR, SummaryPrint, aLock, BUDGET,userId,CompanyCode } = req.body;
//         let updatedAccountMaster;
    
//         if (aGroup) {
//           const parentGroup = await Accountmaster.findById(aGroup);
          
//           if (!parentGroup) {
//             return res.status(404).json({ message: "Parent group not found" });
//           }
    
//           updatedAccountMaster = {
//             FLAG,
//             PartyName,
//             aGroup: parentGroup.PartyCode, // Use parent group's PartyCode
//             GroupName:parentGroup.PartyName,
//             YR_OB,
//             TOT_CR,
//             TOT_DR,
//             SummaryPrint,
//             aLock,
//             BUDGET,
//             userId,
//             CompanyCode
//           }
//         } else {
//           newAccountGroup = new Accountmaster({ FLAG, PartyName, GroupName, YR_OB, TOT_CR, TOT_DR, SummaryPrint, aLock, BUDGET,userId,CompanyCode });
//         }
//         const updatedAccMaster = await Accountmaster.findByIdAndUpdate(
//           id,
//           updatedAccountMaster,
//           { new: true }
//         );
    
//         if (!updatedAccMaster) {
//           return res.status(404).json({ message: "Account group not found" });
//         }
    
//         res.status(200).json({
//           message: "Account group updated successfully",
//           data: updatedAccMaster,
//         });
//       } catch (error) {
//         console.error(error);
//         res.status(400).json({ message: "Error updating account group" });
//       }
//     },

//     // Delete an account by ID
//     deleteAccountById: async (req, res) => {
//         try {
//             const deletedAccount = await Accountmaster.findByIdAndDelete(req.params.id);
//             if (!deletedAccount) {
//                 return res.status(404).json({ error: 'Account not found' });
//             }
//             res.status(200).json({ message: 'Account deleted successfully' ,data:deletedAccount });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Server error' });
//         }
//     },
   


// };

 
// module.exports = AccountMasterController;


const Accountmaster = require("../models/account_master_modal");
const SuperMaster = require("../models/super_master_modal");
const AlternetAddress=require("../models/alternate_address_model")
const AccountMasterController = {
    // Create a new account
    createAccount:  async (req, res) => {
      try {
        const { FLAG, PartyName,aGroup,GroupName, YR_OB, TOT_CR, TOT_DR, SummaryPrint, aLock, BUDGET,userId,CompanyCode, Otherdata, additionalData } = req.body;
        console.log(req.body)
        let newAccountGroup;
    
        if (aGroup) {
          const parentGroup = await Accountmaster.findById(aGroup);
         
          if (!parentGroup) {
            return res.status(404).json({ message: "Parent group not found" });
          }
    
    
          newAccountGroup = new Accountmaster({
            FLAG,
            PartyName,
            aGroup: parentGroup.PartyCode, // Use parent group's PartyCode
            GroupName:parentGroup.PartyName,
            YR_OB,
            TOT_CR,
            TOT_DR,
            SummaryPrint,
            aLock,
            BUDGET,
            userId,
            CompanyCode
          });
        } else {
          newAccountGroup = new Accountmaster({ FLAG, PartyName, GroupName, YR_OB, TOT_CR, TOT_DR, SummaryPrint, aLock, BUDGET,userId,CompanyCode });
        }
    
        const savedAccMaster = await newAccountGroup.save();
        const superMasterData = new SuperMaster({
          PartyCode: savedAccMaster.PartyCode, // Use PartyCode from savedAccMaster
          ...Otherdata,
        // Add1,
        // Add2,
        // City,
        // Pin,

        // //   image: {
        //     data: buffer, // Assuming 'buffer' contains the image data
        //     contentType: mimetype, // Assuming 'mimetype' is the image MIME type
        //   }, // Spread additionalData from req.body
        //   // Other fields in SuperMaster


        });
        const savedSuperMaster = await superMasterData.save();

        const AlternetMasterData=new AlternetAddress({
          PartyCode: savedAccMaster.PartyCode, // Use PartyCode from savedAccMaster
          ...additionalData,

        });

    
        const savedAlternetmaster = await AlternetMasterData.save();
        
        res.status(201).json({
          message: "Account group created successfully",
          data: savedAccMaster,
          superMasterData: savedSuperMaster ,
          alternetmasterdata: savedAlternetmaster,// Include saved SuperMaster data in the response
        });
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error creating account group" });
      }
    },

    getPartyNamesWithFlagL :async (req, res) => {
      try {
        const dataWithFlagL = await Accountmaster.find({ FLAG: 'L' });
    
        if (!dataWithFlagL || dataWithFlagL.length === 0) {
          return res.status(404).json({ message: "No data found with FLAG 'L'" });
        }
    
        res.status(200).json({ data: dataWithFlagL });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving data" });
      }
    },

    getPartyNamesWithFlagG: async (req, res) => {
      try {
        const dataWithFlagG = await Accountmaster.find({ FLAG: 'G', aGroup: { $exists: true } }).select('PartyName aGroup');
    
        if (!dataWithFlagG || dataWithFlagG.length === 0) {
          return res.status(404).json({ message: "No data found with FLAG 'G' and valid aGroup" });
        }
    
        res.status(200).json({ data: dataWithFlagG });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving data" });
      }
    },
    
    
    
    // Get all accounts
    getAllAccounts: async (req, res) => {
      try {
        const accounts = await Accountmaster.find();
    
        const accountsWithRelatedData = await Promise.all(
          accounts.map(async (account) => {
            const superMasterData = await SuperMaster.findOne({ PartyCode: account.PartyCode });
            const alternetMasterData = await AlternetAddress.findOne({ PartyCode: account.PartyCode });
            return {
              ...account._doc,
              superMasterData,
              alternetMasterData,
            };
          })
        );
    
        res.status(200).json(accountsWithRelatedData);
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error fetching accounts" });
      }
    },

    // Get an account by ID
    getAccountById: async (req, res) => {
      try {
        const { id } = req.params;
        const account = await Accountmaster.findById(id);
        if (!account) {
          return res.status(404).json({ message: "Account not found" });
        }
    
        const superMasterData = await SuperMaster.findOne({ PartyCode: account.PartyCode });
        const alternetMasterData = await AlternetAddress.findOne({ PartyCode: account.PartyCode });
    
        res.status(200).json({
          ...account._doc,
          superMasterData,
          alternetMasterData,
        });
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error fetching account" });
      }
    },

    // Update an account by ID
    // updateAccountById: async (req, res) => {
    //   try {
    //     const { id } = req.params;
    //     const updatedAccount = await Accountmaster.findByIdAndUpdate(id, req.body, { new: true });
    //     if (!updatedAccount) {
    //       return res.status(404).json({ message: "Account not found" });
    //     }
    
    //     const superMasterData = await SuperMaster.findOne({ PartyCode: updatedAccount.PartyCode });
    //     const alternetMasterData = await AlternetAddress.findOne({ PartyCode: updatedAccount.PartyCode });
    
    //     res.status(200).json({
    //       ...updatedAccount._doc,
    //       superMasterData,
    //       alternetMasterData,
    //     });
    //   } catch (error) {
    //     console.error(error);
    //     res.status(400).json({ message: "Error updating account" });
    //   }
    // },

    updateAccountById: async (req, res) => {
      try {
        const { id } = req.params;
        const { Otherdata, additionalData, ...accountData } = req.body;
    
        // Update Accountmaster document
        const updatedAccount = await Accountmaster.findByIdAndUpdate(id, accountData, { new: true });
        if (!updatedAccount) {
          return res.status(404).json({ message: "Account not found" });
        }
    
        // Update SuperMaster document
        if (Otherdata) {
          await SuperMaster.findOneAndUpdate(
            { PartyCode: updatedAccount.PartyCode },
            Otherdata,
            { new: true, upsert: true } // Create if not exists
          );
        }
    
        // Update AlternetAddress document
        if (additionalData) {
          await AlternetAddress.findOneAndUpdate(
            { PartyCode: updatedAccount.PartyCode },
            additionalData,
            { new: true, upsert: true } // Create if not exists
          );
        }
    
        const superMasterData = await SuperMaster.findOne({ PartyCode: updatedAccount.PartyCode });
        const alternetMasterData = await AlternetAddress.findOne({ PartyCode: updatedAccount.PartyCode });
    
        res.status(200).json({
          ...updatedAccount._doc,
          superMasterData,
          alternetMasterData,
        });
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error updating account" });
      }
    },
    

    // Delete an account by ID
    deleteAccountById: async (req, res) => {
      try {
        const { id } = req.params;
    
        // Find the account by ID
        const deletedAccount = await Accountmaster.findById(id);
        if (!deletedAccount) {
          return res.status(404).json({ message: "Account not found" });
        }
    
        // Find and delete related SuperMaster and AlternetAddress data
        const deletedSuperMaster = await SuperMaster.findOneAndDelete({ PartyCode: deletedAccount.PartyCode });
        const deletedAlternetAddress = await AlternetAddress.findOneAndDelete({ PartyCode: deletedAccount.PartyCode });
    
        // Delete the account
        await Accountmaster.findByIdAndDelete(id);
    
        // Respond with deleted data and success message
        res.status(200).json({
          message: "Account and related data deleted successfully",
          deletedAccount,
          deletedSuperMaster,
          deletedAlternetAddress,
        });
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error deleting account" });
      }
    },
   


};

 
module.exports = AccountMasterController;

