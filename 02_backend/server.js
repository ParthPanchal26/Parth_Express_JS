import express from 'express';
const app = express();

const PORT = 3000;

import jokes from './jokes.js';
const joke = jokes;

app.get('/api/jokes', (req, res) => {
    res.send(joke)
})

app.listen(PORT, () => {
    console.log(`APP listening on http://localhost:${PORT}`);
})