const express = require('express');
const router = express.Router();
const userController = require('../controllers/userContoller');




// Routes
router.get('/usermanagement', userController.view);
router.post('/usermanagement', userController.find);
router.get('/edituser/:id', userController.edit);
router.post('/edituser/:id', userController.update);
router.get('/viewuser/:id', userController.viewall);
router.get('/usermanagement/:id',userController.delete);

module.exports = router;