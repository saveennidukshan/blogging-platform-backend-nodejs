import { Router } from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog, getComments, createComment, deleteComment } from "../controllers/blog.controller.js";

const router = Router()

router.get('/', getAllBlogs);
router.post('/', createBlog);
router.get('/:id', getBlogById);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);
router.get('/:id/comment', getComments);
router.post('/:id/comment', createComment);
router.delete('/:id/comment/:comId', deleteComment);


export default router;
