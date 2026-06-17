import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API' });
});

app.listen(PORT, () => {
  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-${PORT}.app.github.dev`
    : `http://localhost:${PORT}`;
  console.log(`Server running at ${baseUrl}`);
});

export default app;
