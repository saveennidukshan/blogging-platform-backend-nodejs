import { UserRepository } from './../models/auth.model.js';
import { BadRequestResponse, CreatedResponse, SuccessResponse, UnauthorizedResponse } from '../helpers/response.helper.js';
import { hashPassword, verifyPassword } from '../utills/hash.utill.js';
import { generateTokens } from '../utills/jwt.utill.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const user = await UserRepository.findByEmail(email);
    if (user) return new BadRequestResponse("User alredy exists").send(res);
    await UserRepository.create(email, await hashPassword(password), username);
    return new CreatedResponse("User created success").send(res);
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserRepository.findByEmail(email);
    if (!user) return new UnauthorizedResponse("Invalid email or password").send(res);
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) return new UnauthorizedResponse("Invalid email or password").send(res);
    const tokens = generateTokens(user.id);
    return new SuccessResponse("Login successful", tokens).send(res);
};

