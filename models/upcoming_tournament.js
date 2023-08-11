

const mongoose = require('mongoose');

const upcomingTournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img:{
    type:String,
    trim:true,
    default:'https://i.pinimg.com/736x/cf/d2/4c/cfd24c4f622d50d4902e9346a2ade98c.jpg'
},
game:{
  type:String,
  default:"BGMI"
},
totalslots:{
  type:Number ,
  default:"100 "
},
player:{
  type:Number,
  default:"2 "
},
filledslots:{
  type:Number ,
  default:"50 "

}

});

const UpcomingTournament = mongoose.model('UpcomingTournament', upcomingTournamentSchema);

module.exports = UpcomingTournament;










