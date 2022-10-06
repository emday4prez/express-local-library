const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
 name:{type: String, required: true, maxLength: 100, minLength: 3},
})

BookSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);