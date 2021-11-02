const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the User model
  type User {
    _id: ID
    name: String
    email: String
    # Do not allow password to be reached by client
    #password: String
    posts: [Post]
  }

  type Post {
    _id: ID
    title: String
    content: String
    users: [User]
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    posts: [Post]
    # must provide id in query to run user or post query
    user(id: ID!): User
    post(id: ID!): Post
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    updateUser(id: ID!, name: String!): User
  }
`;

module.exports = typeDefs;
