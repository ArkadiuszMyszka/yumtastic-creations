import { Router } from 'express';
import { User } from '#models/User.js';
import { isInDb } from '#helpers/usersHelpers.js';
import jwt from 'jsonwebtoken';

export const router = Router();

// DO USUNIĘCIA PRZED ODDANIEM PROJEKTU!!!!!!!!!
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}).lean();
    console.log(users);
    res.json(users);
  } catch (err) {
    next(err);
  }
});
///////////////////////////////////////////////

router.post('/signup', async (req, res, next) => {
  const { email, password } = req.body;
  const userInDb = await isInDb(email);
  if (userInDb) {
    return res.status(409).json({ message: 'Email in use' });
  }
  try {
    const user = new User({ email });
    await user.setPassword(password);
    await user.save();
    res.status(201).json({ message: 'Account created', user });
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userInDb = await isInDb(email);
    const isPasswordCorrect = userInDb ? await userInDb.comparePassword(password) : false;
    if (!userInDb || isPasswordCorrect === false) {
      return res.status(401).json({ message: 'Email or password is wrong' });
    }
    const payload = { id: userInDb._id, email: userInDb.email };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '6h' });

    res.status(200).json({ token: token, user: userInDb, message: 'Login successful' });
  } catch (err) {
    next(err);
  }
});
