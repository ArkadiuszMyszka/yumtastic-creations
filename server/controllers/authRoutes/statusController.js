async function statusUser(req, res, next) {
  try {
    const user = res.locals.user;
    res.status(200).json({ message: 'You are online', user: user });
  } catch (err) {
    next(err);
  }
}

export { statusUser };
