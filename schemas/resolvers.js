const { User, Post } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the classes collection
      return await User.find({});
    },
    posts: async () => {
        return await Post.find({});
    }
  }
};

module.exports = resolvers;
