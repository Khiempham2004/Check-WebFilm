import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email: String,
    password: String
})

const userModel = mongoose.model('users', userSchema)

export default userModel;