async function idRecipe(req, res, next) {
  return res.json(req.params.id).status(200);
}

export { idRecipe };
