import { Router } from 'express';
import { User } from '#models/User.js';
import { isInDb } from '#helpers/usersHelpers.js';
import jwt from 'jsonwebtoken';
import { authMiddleware } from '#auth/jwt.js';

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

// Rejestracja nowego użytkownika
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

// identyfikacja przez email i hasło
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

// Identyfikacja przez bearer token
router.get('/current', authMiddleware, async (req, res, next) => {
  try {
    const user = res.locals.user;
    res.status(200).json({ message: 'You are online', user: user });
  } catch (err) {
    next(err);
  }
});

// Identyfikacja przez bearer token
router.get('/logout', authMiddleware, async (req, res, next) => {
  try {
    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    next(err);
  }
});

// W pozniejszym czasie dodac więcej opcji zmiany danych uzytkownika
// Identyfikacja przez bearer token
router.patch('/patch', authMiddleware, async (req, res, next) => {
  try {
    const userData = res.locals.user;
    const user = await User.findById(userData._id);
    const { email, password } = req.body;
    if (email) {
      user.email = email;
    }
    if (password) {
      await user.setPassword(password);
    }
    await user.save();
    res.status(200).json({ message: 'User updated', user });
  } catch (err) {
    next(err);
  }
});
