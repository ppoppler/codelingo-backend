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

    # Python Module Queries

    type Module {
        test_name: String!
        pre_req: String!
    }

    # Question Queries

    type Question{
        question: String!,
        type: String!,
        answers: [String]!
        correctAnswer: String!,
        lesson: String!
    }

    input ModuleInput{
        language: String!,
        lesson: String!
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

        # Question Queries
        getQuestionsByModule(input: ModuleInput): [Question]
    }

    type Mutation {
        createUser(input:UserInput): User
    }

`;

export default typeDefs;
