async function registerUser(req, res, next) {
  return res.json(req.body).status(200);
}

export { registerUser };
