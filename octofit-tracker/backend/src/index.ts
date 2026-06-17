import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API' });
});

app.listen(PORT, () => {
  console.log(`OctoFit Tracker backend running on port ${PORT}`);
});
