const express=require('express');
const router=express.Router();

const gameController=require('../controllers/game_controller.js');

router.get('/',gameController.game);

module.exports=router;