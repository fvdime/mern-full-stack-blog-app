const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const UserSchema = new Schema({
  username: {type: String, required: true, min: 4, uniqe: true},
  password: {type: String, required: true},
  email: {type: String, required: true, match: /.+\@.+\..+/, unique: true}
  // email: {type: String, required: true, match: /.+\@.+\..+/, unique: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;