import { createUser, getUserByEmail } from './../models/auth.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (user) return res.send('alredy created');
    const hash = await bcrypt.hash(password, 10);
    await createUser(email, hash);
    res.send('User created');
  } catch (e) {
    console.log(e);
    return res.send('cred error');
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) return res.send('user not found');
    if (!bcrypt.compareSync(password, user.password)) return res.send('wrong password');
    const token = jwt.sign({ email }, 'myTojwen43', { expiresIn: '1h' });
    res.json({ token });
  } catch (e) {
    console.log(e);
    return res.send('cred error');
  }
};
