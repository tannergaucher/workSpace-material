const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspaceController');

router.post('/add', workspaceController.createWorkspace)


module.exports = router;