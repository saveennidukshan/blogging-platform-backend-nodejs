import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(
  "/api/v1/auth",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
    pathRewrite: {
      "^/api/auth": "",
    },
  })
);

app.use(
  "/api/v1/blog",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
    pathRewrite: {
      "^/api/auth": "",
    },
  })
);

app.get('/',(req, res)=>res.send("Gateway Running"))

export default app;