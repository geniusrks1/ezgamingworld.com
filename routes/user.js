const express=require('express');
const router=express.Router();

const userController=require('../controllers/user_controller.js');

router.get('/',userController.user);
router.use('/profile',require('./profile'));

module.exports=router;
