const { AuthenticanError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async(parent, { userId }) => {
      return await User.findOne({ _id: userId })
    },
    me: async ( parent, args, context ) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('Please login to proceed!');
    },
  },
  Mutation: {
    addUser: async ( parent, { username, email, password }) => {
      const user = await User.create(
        { 
          username, 
          email, 
          password 
        }
      );
      const token = signToken(user);
      return { token, user };
    },
    login: async(parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) throw new AuthenticationError('Invalid Username. Please try again!');

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) throw new AuthenticationError('Invalid Password. Please try again!');
      
      const token = signToken(user); 
      return { token, user };
    },
    updateUser: async (parent, { userId, username, email, password }) => {
      return await User.findOneAndUpdate(
        {
          _id: userId
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
    deleteUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  }
};

module.exports = resolvers;
