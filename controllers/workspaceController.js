const mongoose = require('mongoose');
const Workspace = mongoose.model('Workspace');
const uuid = require('uuid');


exports.createWorkspace = async (req, res) => {
  const workspace = await (new Workspace(req.body)).save();
  console.log('workspace created', workspace)
}
exports.updateWorkspace = async (req, res) => {
  //set location data to be a point 
  //req.body.location.type = 'Point'
  console.log("req.params.id:", req.params.id)
  const workspace = await Workspace.findOneAndUpdate({ id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  }).exec();
  // req.flash('success', )
  // res.redirect('/')
  console.log('workspace updated', workspace)
}

exports.deleteWorkspace = async (req, res) => {
  const workspace = await Workspace.findOne({ id: req.params.id }).remove()
  console.log('delete item from db', workspace)
}

exports.getWorkspaces = async (req, res) => {
  console.log('getting items')
  const workspacesPromise = Workspace.find();
  const countPromise = Workspace.count();
  const [workspaces, count] = await Promise.all([workspacesPromise, countPromise]);
  console.log('workspaces:', workspaces, 'count:', count)
  console.log('length', workspaces.length);

  // return workspaces
}
