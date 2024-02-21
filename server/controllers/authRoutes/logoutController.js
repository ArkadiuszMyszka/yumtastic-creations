async function logoutUser(req, res, next) {
  try {
    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    next(err);
  }
}

export { logoutUser };
