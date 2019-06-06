import mongoose from "mongoose";
import Users from "../models/User";
import PythonModules from "../models/PythonModule";

export const resolvers = {
  Query: {
    /**
     * User Queries
     */

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

    /**
     * Python Module Queries
     */

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
    }
  },

  /**
   * Mutations
   */

  Mutation: {
    /**
     * User Mutations
     */
    createUser: (root, { input }) => {
      const newUser = new Users({
        name: input.name,
        email: input.email,
        password: input.password,
        date: input.date
      });

      newUser.id = newUser._id;

      return new Promise((resolve, object) => {
        newUser.save(err => {
          if (err) reject(err);
          else resolve(newUser);
        });
      });
    }
  }
};
