import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routers/auth.router.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', router);

export default app;
