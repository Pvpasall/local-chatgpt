import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/chat', async (req, res) => {
  const { model = 'llama3.2:1b', messages = [] } = req.body || {};
  const r = await fetch('http://127.0.0.1:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages, stream: false }),
  });
  const data = await r.json();
  res.json(data);
});

app.get('/chat', async (req, res) => {

  res.json({ message: "Hello from the GET /chat endpoint!" });

});

app.listen(3000, () => console.log("UI dispo sur http://localhost:3000"));