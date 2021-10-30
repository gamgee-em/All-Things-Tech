const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    /* post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    } */
  }
);

const User = model('User', userSchema);

module.exports = User;
