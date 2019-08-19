const Mongoose = require('mongoose');

const TweetScheema = new Mongoose.Schema({
  author : String,
  content : String,
  likes : {
    type: Number,
    default : 0,
  },
  createdAt: {
    type : Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model('tweet', TweetScheema);