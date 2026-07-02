import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { authMiddleware } from "./src/middlewares/auth.middleware.js";

const app = express();

app.use(
  "/api/v1/auth",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
    pathRewrite: {
      "^/api/v1/auth": "",
    },
  })
);

app.use(
  "/api/v1/blog",
  authMiddleware,
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
    pathRewrite: {
      "^/api/v1/blog": "",
    },
  })
);

app.get("/", (req, res) => {
  res.send("Gateway Running");
});

export default app;