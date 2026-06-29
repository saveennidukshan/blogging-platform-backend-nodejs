import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routers/comment.router.js'
import connectDB from './src/configs/comment.db.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', router);
await connectDB();

export default app;
