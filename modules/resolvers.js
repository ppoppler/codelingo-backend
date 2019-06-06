import mongoose from 'mongoose';
import Users from '../models/User';

export const resolvers = {
    Query: { 
        getUser: (root, {id}) => {
            return new Promise((resolve,object) =>{
                Users.findById(id, (err,friend) => {
                    if(err) rejects(err)
                    else resolve(friend)
                });
            });
        },
        getUsers: () => {
            return Users.find({}, (err,users) => {
                const userMap = {};

                users.forEach( () => {
                    userMap[user.id] = user;
                });

                res.send(userMap);
            });
        }
    },
    Mutation: {
        createUser: (root, {input}) => {
            const newUser = new Users({
                name : input.name,
                email : input.email,
                password : input.password,
                date : input.date
            })

            newUser.id = newUser._id;

            return new Promise((resolve, object) => {
                newUser.save((err) => {
                    if(err) reject(err);
                    else resolve(newUser);
                });
            });
        }
    }
}