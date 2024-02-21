import passport from 'passport';

export const authMiddleware = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    
    if (!user || error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    res.locals.user = user;
    next();
  })(req, res, next);
};
