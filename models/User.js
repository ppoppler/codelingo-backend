import mongoose, { Schema } from "mongoose";
import { connection1 } from "../config/database";

/**
 * Mongoose Schema for Users in the 'test' MongoDB database
 */

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  /**
   * TODO: Fix the UserSchema to include the modules that a user has completed and the score they received on each module test
   */
});

/**
 * Mongoose model from 'test' database connection
 */
const Users = connection1.model("users", UserSchema, "users");

export default Users;
