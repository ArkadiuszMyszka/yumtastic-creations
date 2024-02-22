import { User } from '#models/User.js';

// jak na razie na main dostajemy wszystkich userów
// w przyszłości do usuniecia.
async function main(req, res, next) {
  try {
    const users = await User.find({}).lean();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

export { main };
