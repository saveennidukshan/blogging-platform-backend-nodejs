import jwt from "jsonwebtoken";

const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  JWT_ACCESS_EXPIRES_IN = "15m",
  JWT_REFRESH_EXPIRES_IN = "30d",
  JWT_ISSUER = "auth-service",
  JWT_AUDIENCE = "blog-api",
} = process.env;

if (!JWT_ACCESS_SECRET || !JWT_REFRESH_SECRET) {
  throw new Error("JWT secrets are missing");
}

const signToken = (secret, expiresIn, userId) => {
  return jwt.sign(
    {},
    secret,
    {
      subject: String(userId),
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
      expiresIn,
    }
  );
};

export const generateTokens = (userId) => {
  const accessToken = signToken(
    JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRES_IN,
    userId
  );

  const refreshToken = signToken(
    JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRES_IN,
    userId
  );

  return {
    accessToken,
    refreshToken,
  };
};