const { User, Post } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the users collection
      return await User.find({}).populate('posts');
    },
    user: async (parent, { id }) => {
      return await User.findById({ _id: id }).populate('posts');
    },
    posts: async () => {
        return await Post.find({}).populate('users');
    },
    post: async (parent, { id }) => {
        return await Post.findById({ _id: id }).populate('users');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return await User.create(
        { 
          username, 
          email, 
          password 
        },
      );
    },
    updateUser: async (parent, { id, username, email, password }) => {
      return await User.findOneAndUpdate(
        {
          _id: id
        },
        {
          username,
          email,
          password
        },
        //* return updated data
        { 
          new: true 
        },
      );
    },
    addPost: async (parent, { userId, title, content }) => {
      /* return Post.create( */
      return User.findOneAndUpdate(
        {
          _id: userId
        },
        { 
          $addToSet: {
            posts: {
              title,
              content
            }
          }
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updatePost: async (parent, { id, title, content }) => {
      return Post.findOneAndUpdate(
        { 
          _id: id 
        },
        {
          title,
          content
        },
        {
          new: true,
        },
      );
    },
    deleteUser: async (parent, { id }) => {
      return User.findOneAndDelete(
        { 
          _id: id 
        }
      );
    },
    deletePost: async (parent, { id }) => {
      return Post.findOneAndDelete(
        { 
          _id: id 
        }
      );
    },
  }
};

module.exports = resolvers;
