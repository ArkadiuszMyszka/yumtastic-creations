import process from 'node:process';
import { app } from './app.js';
import 'dotenv/config';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3001;
const connection = mongoose.connect(process.env.DB_HOST);

// app.listen(PORT, () => {
//   console.log(`Server running. Use our API on port: ${PORT}`);
// });

const startServer = async () => {
  try {
    await connection;
    console.log('Database connection successful');
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (err) {
    console.log('db not connected');
    process.exit(1);
  }
};

startServer();
