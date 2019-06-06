import mongoose, {Schema} from "mongoose";
import {connection2} from "../config/database";


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

const PythonModules = connection2.model("python", PythonModuleSchema, "python_modules");

export default PythonModules;
