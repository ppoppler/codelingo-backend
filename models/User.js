import mongoose, {Schema} from 'mongoose';
import {connection1} from "../config/database";
/**
 * Creating mongoose model for our server 
 */

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now 
    }
});

const Users = connection1.model('users', UserSchema, "users");

export default Users; 