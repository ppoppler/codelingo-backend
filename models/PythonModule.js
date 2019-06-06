import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PythonModuleSchema = new Schema({
  testName: {
    type: String,
    required: true
  },
  preReq: {
    type: String,
    required: true
  }
});

const PythonModule = new PythonModuleSchema();

export default PythonModule;
