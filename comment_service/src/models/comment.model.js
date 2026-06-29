import Comment from './../schemas/comment.schema.js'

export const createPostComment = async (postId, text) => {
    console.log("called with "+postId+text);
    
    try{
        const data =  await Comment.create({
            postId,
            text
        })   
        console.log(data);
        
        return true;  
    }catch (err) {
    console.error(err);
}
}

export const findCommentsByPostId = async (postId) => {
    try{
        const data = await Comment.find({
            postId
        })
        return data;  
    }catch (err) {
    console.error(err);
}
}

export const deletePostComment = async (commentId) => {
    try{
        const data = await Comment.deleteMany({
            commentId
        })
        return data;  
    }catch (err) {
    console.error(err);
}
}