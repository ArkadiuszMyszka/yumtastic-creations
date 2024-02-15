async function main(req, res, next) {
   return res.json(req.body).status(200);
}

export { main };
