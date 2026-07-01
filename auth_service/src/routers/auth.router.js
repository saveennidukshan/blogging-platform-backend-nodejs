import { Router } from 'express';
import { login, register } from './../controllers/auth.controller.js';
import { validate } from '../middlewares/validation.middlware.js';
import { loginSchema, registerSchema } from '../schemas/validation.schema.js';
import { asyncHandler } from '../helpers/asyncHandler.js';

const router = Router();

router.post('/register', validate(registerSchema), asyncHandler(register));
router.post('/login', validate(loginSchema), asyncHandler(login));

export default router;
