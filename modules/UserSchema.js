import {gql} from 'apollo-server-express';

const typeDefs = gql`

    type User{
        id: ID!,
        name: String!,
        email: String!,
        password: String!,
        date: String
    }

    type Query { 
        getUsers: [User] 
        getUser(id: ID!): User,
    }

    input UserInput { 
        name:String!,
        email:String!,
        password:String!,
        date:String
    }

    type Mutation {
        createUser(input:UserInput): User
    }

`;

export default typeDefs;
