var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: {type: String, required: true, minLength: 1, maxLength: 300},
    body: {type: String, required: true, minLength: 1},
    published: {type: Boolean, required: true},
    timestamp: {type: Date, default: Date.now, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
  }
);

PostSchema.virtual("date_formated").get(function () {
  return this.date.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minutes: "2-digit",
  });
});

//Export model
module.exports = mongoose.model('Post', PostSchema);