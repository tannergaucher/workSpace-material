const mongoose = require('mongoose');
const Workspace = mongoose.model('Workspace');
const uuid = require('uuid');

exports.createWorkspace = async (req, res) => {
  // req.body.author = req.user._id;
  const Workspace = await (new Workspace(req.body)).save();
  console.log('workspace created', Workspace)
}


