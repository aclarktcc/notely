var db = require('../config/db');

var UserSchema = db.Schema({
  username: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  password_digest: { type: String, required: true },
  updated_at: { type: Date, default: Date.now }
});

UserSchema.pre('save', function(next) {

  this.updated_at = Date.now();
  next();
});

UserSchema.methods.toJSON = function(){
  var object = this.toObject();
  delete object.password_digest;
  delete object.__v; //key only for mongo
  return object;
}

module.exports = UserSchema;
