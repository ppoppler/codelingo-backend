import mongoose, { Schema } from "mongoose";
import { connection3 } from "../../config/database";

const PythonQuestionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  answers: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  lesson: {
    type: String,
    required: true
  }
});

const PythonQuestions = connection3.model("questions", PythonQuestionSchema, "python");

export default PythonQuestions;