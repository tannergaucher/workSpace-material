const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspaceController');


router.get('/getWorkspaces', workspaceController.getWorkspaces)

router.post('/add', workspaceController.createWorkspace)
router.post('/update/:id', workspaceController.updateWorkspace)
router.post('/delete/:id', workspaceController.deleteWorkspace)

module.exports = router;