import { Router } from 'express';
import { User } from '#models/User.js';
import { isInDb } from '#helpers/usersHelpers.js';

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
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'Account created', user });
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {});
