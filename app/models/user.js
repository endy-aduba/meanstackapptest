var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var bcrypt = require('bcrypt')
  const saltRounds = 10;

  var UserSchema = new Schema({
      username: {
          type: String,
          lowercase: true,
          unique: true,
          required: true
      },
      password: {
          type: String, 
          required: true
      },
      email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true
      }
  }); 

    UserSchema.pre('save',function(next){
        var user = this;
        bcrypt.hash(user.password,saltRounds,function(err,hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });

  module.exports = mongoose.model('User', UserSchema);