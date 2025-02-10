import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const PORT = 1234;
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/booksdb', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const kirja = new mongoose.Schema({
  author: String,
  name: String,
  pages: Number,
});
const Book = mongoose.model('Book', kirja);
app.post('/api/book', async (req, res) => {
  try {
    const uusi = new Book(req.body);
    await uusi.save();
    res.status(201).json(uusi);
  } catch (error) {
    res.status(500).json({ message: 'virhe', error });
  }
});
app.listen(PORT, () => {
  console.log(`Täällä toimii http://localhost:${PORT}`);
});
