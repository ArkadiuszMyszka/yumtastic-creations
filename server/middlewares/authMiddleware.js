import passport from 'passport';

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization
  
  passport.authenticate("jwt", { session: false }, async (error, user) => {
    if (!user || error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.locals.user = user;
    if (user.isLogged === false) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (token !== `Bearer ${user.token}`) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  })(req, res, next);
};
