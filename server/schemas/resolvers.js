const { User, Post } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the users collection
      return await User.find({}).populate('posts');
    },
    user: async (parent, args) => {
      return await User.findById(args.id).populate('posts');
    },
    posts: async () => {
        return await Post.find({}).populate('users');
    },
    post: async (parent, args) => {
        return await Post.findById(args.id).populate('users');
    },
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      return await User.create(
        { 
          name, 
          email, 
          password 
        },
      );
    },
    updateUser: async (parent, { id, name, email, password }) => {
      return await User.findOneAndUpdate(
        {
          _id: id
        },
        {
          name,
          email,
          password
        },
        //* return updated data
        { 
          new: true 
        },
      );
    },
    addPost: async (parent, { title, content }) => {
      return Post.create(
        { 
          title, 
          content
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
