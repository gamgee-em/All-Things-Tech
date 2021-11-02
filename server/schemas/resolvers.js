const { User, Post } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the classes collection
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
    }
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      return await User.create({ name, email, password });
    },
    updateUser: async (parent, { id, name }) => {
      return await User.findOneAndUpdate(
        {
          _id: id
        },
        {
        name
        },
        { 
          new: true 
        }
      );
    }
  }
};

module.exports = resolvers;
