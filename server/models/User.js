const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
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
    //* add relationship to post model
    posts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Post'
      }
    ]
  }
);

const User = model('User', userSchema);

module.exports = User;
