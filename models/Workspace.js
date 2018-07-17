const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//create Schema
const workspaceSchema = new mongoose.Schema ({
  name: {
    type: String
  },
  id: {
    type: String
  },
  rating: {
    type: Number
  },
  description: {
    type: String,
    // required: true
  },
  image: {
    type: String
  },
  location: {
    type: String
  }
});

module.exports = mongoose.model('Workspace', workspaceSchema);

