const express=require('express');
const router=express.Router();

const feedController=require('../controllers/feed_controller.js');

router.get('/',feedController.feed);

module.exports=router;