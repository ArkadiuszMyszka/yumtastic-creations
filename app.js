import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import index from './server/routes/indexRoutes.js';
import auth from './server/routes/authRoutes.js';
import recipes from './server/routes/recipesRoutes.js';


const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

console.log('app działa');

app.use('/', index);
app.use('/', auth);
app.use('/recipes', recipes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export { app };
