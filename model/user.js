var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')

// create a schema
var userSchema = new Schema({
  name:String,
  email: String,
    city:String,
  password:String,
  image : String,
  like_count:Number,
  user_details:String,
},{ collection:'user'});

userSchema.pre('save', function(next) {
  console.log("Something");
  var user =this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if(err) return next(err);
    user.password=hash;
    console.log(user);
    console.log("user saved");
    next();
  });
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
