var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: {type: String, required: true, minLength: 1, maxLength: 300},
    body: {type: String, required: true, minLength: 20},
    published: {type: Boolean, required: true},
    timestamp: {type: Date, default: Date.now, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
  }
);

//Export model
module.exports = mongoose.model('Post', PostSchema);