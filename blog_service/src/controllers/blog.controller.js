import { prisma } from "./../configs/db.config.js"

export const getAllBlogs = async (req, res) => {
    const blogs = await prisma.blog.findMany({});
    res.json(blogs);
}

export const getBlogById = async (req, res) => {
    const id = Number(req.params.id);
    const blogs = await prisma.blog.findUnique({
        where:{
            id
        }
    });
    res.json(blogs);
}

export const createBlog = async(req, res) => {
    const {title, content, user} = req.body;
    const blog = await prisma.blog.create({
        data:{
            title,
            content,
            user
        }
    });
    res.json(blog);
}

export const updateBlog = async (req, res) => {
    const id = Number(req.params.id);
    const {title, content} = req.body;
    const blogs = await prisma.blog.update({
        where:{
            id
        },
        data:{
            title,
            content
        }
    });
    res.json(blogs);
}

export const deleteBlog = async(req, res) => {
    const id = Number(req.params.id);
    await prisma.blog.delete({
        where:{
            id
        }
    });
    res.json({
        success: true
    });
}