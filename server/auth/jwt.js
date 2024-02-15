import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '#models/User.js';

export const setJWTStrategy = () => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
  };

  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload.id).lean();
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }),
  );
};

export const authMiddleware = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    if (!user || error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    res.locals.user = user;
    next();
  })(req, res, next);
};
