const express=require('express');
const router=express.Router();

const tournamentController=require('../controllers/tournament_controller.js');

router.get('/',tournamentController.tournament);


module.exports=router;