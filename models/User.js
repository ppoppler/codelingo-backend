import mongoose from 'mongoose';

/**
 * Creating mongoose model for our server 
 */

const Schema = mongoose.Schema;

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

const Users = mongoose.model('users', UserSchema, "users");

export default Users; 