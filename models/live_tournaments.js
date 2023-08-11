const mongoose = require('mongoose');

const liveTournamentSchema = new mongoose.Schema({
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

const liveTournament = mongoose.model('liveTournament', liveTournamentSchema);

module.exports = liveTournament;
