async function categoryRecipes(req, res, next) {
  return res.json(req.params.category).status(200);
}

export { categoryRecipes };
