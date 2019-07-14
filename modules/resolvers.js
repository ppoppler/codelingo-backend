import mongoose from "mongoose";
import Users from "../models/User";
import PythonModules from "../models/PythonModule";
import Questions from "../models/Questions";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../utils/authUtils";

export const resolvers = {
  Query: {
    // User queries

    getUserByID: (root, { id }) => {
      return new Promise((resolve, object) => {
        Users.findById(id, (err, user) => {
          if (err) rejects(err);
          else resolve(user);
        });
      });
    },
    getUserByName: (root, { name }) => {
      return new Promise((resolve, object) => {
        Users.findOne({ name: name }, (err, user) => {
          if (err) rejects(err);
          else resolve(user);
        });
      });
    },
    getUserByEmail: (root, { email }) => {
      return new Promise((resolve, object) => {
        Users.findOne({ email: email }, (err, user) => {
          if (err) rejects(err);
          else resolve(user);
        });
      });
    },
    getUsers: () => {
      return new Promise((resolve, object) => {
        PythonModules.find({}, (err, res) => {
          if (err) rejects(err);
          else resolve(res);
        });
      });
    },

    // Python module queries

    getModuleByName: (root, { testName }) => {
      return new Promise((resolve, object) => {
        PythonModules.findOne({ test_name: testName }, (err, module) => {
          if (err) rejects(err);
          else resolve(module);
        });
      });
    },
    getModules: () => {
      return new Promise((resolve, object) => {
        PythonModules.find({}, (err, res) => {
          if (err) rejects(err);
          else resolve(res);
        });
      });
    },

    //Question queries
    getQuestionsByModule: (root, { input }) => {
      return new Promise((resolve, object) => {
        const QuestionCollection = Questions.find(collection => {
          if (collection.language === input.language) return collection;
        });
        QuestionCollection.questions.find(
          { lesson: input.lesson },
          (err, res) => {
            if (err) rejects(err);
            else resolve(res);
          }
        );
      });
    }
  },

  // Mutations
  Mutation: {
    // User mutations
    signUpUser: async (root, { input }) => {
      const newUser = new Users({
        name: input.name,
        email: input.email,
        password: await bcrypt.hash(input.password, 10),
        date: input.date
      });

      newUser.id = newUser._id;
      const token = jwt.sign({ userId: newUser.id });

      return new Promise((resolve, object) => {
        newUser.save(err => {
          if (err) reject(err);
          else
            resolve({
              token: token,
              user: newUser
            });
        });
      });
    },

    loginUser: async (root, { input }) => {
      const User = await resolvers.Query.getUserByEmail(root, {
        email: input.email
      });
      if (!User) {
        console.log("User not found");
      } else {
        console.log(User);
      }

      const validPassword = await bcrypt.compare(input.password, User.password);
      if (!validPassword) {
        console.log("Incorrect password");
        return({token: ''});
      }

      const token = jwt.sign({ userId: User.id }, SECRET);

      return new Promise((resolve, object) =>
        resolve({ token: token, user: User })
      );
    }
  }
};
