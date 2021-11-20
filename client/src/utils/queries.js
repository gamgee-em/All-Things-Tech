import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            username
            email
            password
            posts {
                title
                content
            }
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            posts {
                _id
                title
                content
            }
        }
    }
`;