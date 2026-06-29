import { Router } from 'express';
import { createComment, deleteComment, getComments } from '../controllers/comment.controller.js';

const router = Router();

router.get('/:postId', getComments);
router.post('/:postId', createComment);
router.delete('/:commentId', deleteComment);

export default router;