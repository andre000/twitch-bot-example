const { model, Schema } = require('mongoose');

const characterSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  alias: String,
  age: String,
  description: String,
  color: String,
  imageURL: String,
});

module.exports = model('Characters', characterSchema);
