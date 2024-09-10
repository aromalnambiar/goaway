import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';


dotenv.config({ path: './config.env' });

const DB = (process.env.DATABASE || '').replace('<PASSWORD>', process.env.DATABASE_PASSWORD || '');

mongoose.connect(DB)
  .then(con => {
    console.log('DB Connection successfully established');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
