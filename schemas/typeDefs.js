const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the User model
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Post {
    _id: ID
    title: String
    content: String
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    posts: [Post]
  }
`;

module.exports = typeDefs;
