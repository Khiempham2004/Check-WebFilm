import mongoose from "mongoose";


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const imageSchema = new Schema({
    content: String,
    createAt: String,
    isPublic: Boolean,
    attachment: [
        {
            pucblicId: String,
            url: String,
        },
    ],
})

const imageModel = mongoose.model("images", imageSchema)

export default imageModel;