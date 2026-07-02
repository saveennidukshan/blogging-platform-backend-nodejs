import { UnauthorizedResponse } from "../helpers/responses.js";
import { verifyToken } from "../utills/auth.utill.js";

const PUBLIC_GET_ROUTES = [
    "/",
];

export const authMiddleware = (req, res, next) => {
    try {
        const isPublicRoute =
            req.method === "GET" &&
            PUBLIC_GET_ROUTES.some(route => req.path === route);

        if (isPublicRoute) {
            return next();
        }

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return new UnauthorizedResponse("Authorization token is required").send(res);
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return new UnauthorizedResponse("Invalid authorization header").send(res);
        }

        req.user = verifyToken(token, process.env.JWT_ACCESS_SECRET);

        return next();
    } catch (error) {
        return new UnauthorizedResponse("Invalid or expired token").send(res);
    }
};