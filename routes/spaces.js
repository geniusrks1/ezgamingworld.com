
const express=require('express');
const router=express.Router();

const spacesController=require('../controllers/spaces_controller.js');

router.get('/',spacesController.spaces);

module.exports=router;