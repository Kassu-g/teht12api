import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
const api = express();
const h = 1234;

api.use(express.json());

if (process.env.NODE_ENV === 'development') {
  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  };
  api.use(cors(corsOptions));
}
mongoose.connect('mongodb://localhost:27017/booksdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

api.use('/api', require('./routes/bookRoutes'));

if (process.env.NODE_ENV === 'production') {
    api.use(express.static(path.resolve(__dirname, '../../client/build')));

    api.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  });
}
api.listen(h, () => {
  console.log(`ToimiikoS at http://localhost:${h}`);
});

  
