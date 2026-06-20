import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './src/modules/auth/auth.router.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Api Working');
});

export default app;
