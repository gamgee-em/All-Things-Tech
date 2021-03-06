const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    content: {
      type: String,
      required: true
    },
    users: [
      {
      type: Schema.Types.ObjectId,
      ref: 'User'
      }
    ]
  }
);

const Post = model('Post', postSchema);

module.exports = Post;
