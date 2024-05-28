
// const MainGroup = require('../models/main_group_modal');
// async function mainGroup(req, res) {
//   try {
//     const { mainGroup, parentId } = req.body;
//     const newGroupIfReverse = new MainGroup({ mainGroup, parentId }); // Include parentId here
//     await newGroupIfReverse.save();
//     res.status(201).json({ message: 'GroupIfReverse created successfully', data: newGroupIfReverse });
//   } catch (err) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// module.exports = mainGroup;