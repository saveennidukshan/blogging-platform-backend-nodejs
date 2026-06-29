import mongoose from 'mongoose';
import { v4 as uuidv4 } from "uuid";

const commentSchema = new mongoose.Schema({
    commentId: {
        type: String,
        default: uuidv4,
        unique: true
    },
    postId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
})

export default mongoose.model("Comment", commentSchema);