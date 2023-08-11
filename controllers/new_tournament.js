const  UpcomingTournaments= require('../models/upcoming_tournament');

module.exports.newtournament=function(req,res){
    return res.render('tournament',{ UpcomingTournaments});
}
