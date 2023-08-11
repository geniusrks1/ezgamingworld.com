const UpcomingTournament= require('../models/upcoming_tournament');




module.exports.tournament= async function(req,res){
    
   const tournaments= await UpcomingTournament.find({});
 if(!tournaments){
   return res.send('tournaments not found in tournament controller');
} 

const title="tournamentss";
// console.log(tournaments);
return res.render('tournament',{tournaments,title});

 }