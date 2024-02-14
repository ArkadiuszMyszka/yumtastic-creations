import process from 'node:process';
import { app } from './app.js';
import 'dotenv/config';


const PORT = process.env.PORT || 3001;



    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    })

