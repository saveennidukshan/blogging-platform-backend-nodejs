import jwt from "jsonwebtoken";

export const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};