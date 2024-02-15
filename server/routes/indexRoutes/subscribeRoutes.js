import { User } from '#models/User.js';

async function subscribe(req, res) {
  try {
    const userData = res.locals.user;
    const user = await User.findById(userData._id);
    if (!user) {
      return res.status(409).json({ message: `There is no user with email: ${user.email}` });
    }
    user.newsletter = !user.newsletter;
    await user.save();
    return res.status(201).json({
      message: user.newsletter
        ? 'You have subscribed to the newsletter'
        : 'You have unsubscribed from the newsletter',
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export { subscribe };
