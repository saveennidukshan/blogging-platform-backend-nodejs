import { findCommentsByPostId, createPostComment, deletePostComment } from "../models/comment.model.js";

export const getComments = async (req, res) => {
    const postId = req.params.postId;
    console.log(postId)
    const comments = await findCommentsByPostId(postId);
    res.json(comments);
}

export const createComment = async (req, res) => {
    try{
    await createPostComment(req.params.postId, req.body.text);
    }catch{
        console.log("error");
        
    }
    res.send("success")
}

export const deleteComment = async (req, res) => {
    await deletePostComment(req.params.commentId);
    res.send("success")
}