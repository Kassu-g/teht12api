import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 1234;
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, }));
app.use(express.json());
app.get('/api/test', (req, res) => {
  res.json({ message: 'Moikka!' });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
