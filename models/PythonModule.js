import mongoose, {Schema} from "mongoose";
import {connection2} from "../config/database";

/**
 * Mongoose Schema for Python modules in the 'python' MongoDB database
 */

const PythonModuleSchema = new Schema({
  test_name: {
    type: String,
    required: true
  },
  pre_req: {
    type: String,
    required: true
  }
});

/**
 * Mongoose model from 'python' database connection
 */
const PythonModules = connection2.model("python", PythonModuleSchema, "python_modules");

export default PythonModules;
