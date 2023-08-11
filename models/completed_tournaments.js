const mongoose = require('mongoose');

const completedTournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img:{
    type:String,
    trim:true,
    default:'https://i.pinimg.com/736x/cf/d2/4c/cfd24c4f622d50d4902e9346a2ade98c.jpg'
}  
});

const completedTournament = mongoose.model('completedTournament', completedTournamentSchema);

module.exports = completedTournament;
