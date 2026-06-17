import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit_db';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connesso a MongoDB (octofit_db)'))
  .catch((err) => console.error(`Errore di connessione a MongoDB su ${MONGO_URI}. Assicurati che MongoDB sia avviato e raggiungibile.`, err));

app.get('/api/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API attiva', baseUrl });
});

app.listen(PORT, () => {
  console.log(`Server backend in ascolto su ${baseUrl}`);
});

export default app;
