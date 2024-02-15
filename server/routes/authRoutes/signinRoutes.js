async function signinUser(req, res, next) {
  return res.json(req.body).status(200);
}

export { signinUser };
