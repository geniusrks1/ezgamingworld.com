const express=require('express');
const router=express.Router();

const profileController=require('../controllers/profile_controller.js');

router.get('/',profileController.profile);


module.exports=router;
