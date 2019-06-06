import {gql} from 'apollo-server-express';

const typeDefs = gql`

    # User Queries and Mutations
    
    type User{
        id: ID!
        name: String!
        email: String!
        password: String!
        date: String
    }

    input UserInput { 
        name:String!
        email:String!
        password:String!
        date:String
    }

    # Python Module Queries and Mutation

    type Module {
        test_name: String!
        pre_req: String!
    }

    #Mutations and Queries

    type Query { 
        # User Queries
        getUsers: [User] 
        getUserByID(id: ID!): User
        getUserByName(name: String!): User
        getUserByEmail(email:String!): User

        # Python Module Queries
        getModules: [Module],
        getModuleByName(testName: String): Module
    }

    type Mutation {
        createUser(input:UserInput): User
    }

`;

export default typeDefs;
