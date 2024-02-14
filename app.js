import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { router as usersRouter } from './routes/usersRouter.js';

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/users', usersRouter);

console.log('app działa');

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export { app };
