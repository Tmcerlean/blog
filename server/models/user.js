var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    username: {type: String, required: true, minLength: 1, maxLength: 100},
    password: {type: String, required: true, minLength: 5, maxLength: 300},
    admin: {type: Boolean, required: true},
  }
);

// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/:username';
});

//Export model
module.exports = mongoose.model('User', UserSchema);