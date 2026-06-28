import { Router } from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../controllers/blog.controller.js";

const router = Router()

router.get('/', getAllBlogs);
router.post('/', createBlog);
router.get('/:id', getBlogById);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);


export default router;
