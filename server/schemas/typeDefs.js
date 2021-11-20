const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the User model
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
  }

  # pass type Post to User posts
  type Post {
    _id: ID
    title: String
    content: String
  }

  type Auth {
    token: ID!
    user: User
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    user(userId: ID!): User

    # must provide id in query to run user or post query
    singleUser(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth    
    login(username: String!, password: String!): Auth


    updateUser(userId: ID!, username: String!, email: String!, password: String!): User
    deleteUser(userId: ID!): User

  }
`;

module.exports = typeDefs;
