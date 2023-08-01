const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');


router.get('/',homeController.home);

router.use('/user',require('./user'));
router.use('/feed',require('./feed'));
router.use('/games',require('./game'));
router.use('/spaces',require('./spaces'));
router.use('/tournament',require('./tournament'));

module.exports=router;








;












