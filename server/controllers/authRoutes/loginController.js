import { isInDb } from '#helpers/usersHelpers.js';
import jwt from 'jsonwebtoken';

// Jak na razie zwraca token jwt. W pozniejszym etapie do usunięcia,
async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;
    const userInDb = await isInDb(email);
    const isPasswordCorrect = userInDb ? await userInDb.comparePassword(password) : false;
    if (!userInDb || isPasswordCorrect === false) {
      return res.status(401).json({ message: 'Email or password is wrong' });
    }
    const payload = { id: userInDb._id, email: userInDb.email };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '6h' });

    res.status(200).json({ token: token, message: 'Login successful' });
  } catch (err) {
    next(err);
  }
}

export { loginUser };
