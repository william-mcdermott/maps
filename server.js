require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:1234'
}));

app.use(express.static('public'));

app.get('/config', (req, res) => {
  res.json({ apiKey: process.env.MAPS_API_KEY });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
