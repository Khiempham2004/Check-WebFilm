import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const movieSchema = new Schema({
    ID : String,
    name : String,
    time : String,
    year : String,
    image : String,
    introduce : String,
})

const movieModel = mongoose.model('usermovies', movieSchema)

export default movieModel;