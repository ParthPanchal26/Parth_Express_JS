require('dotenv').config();

const express = require('express')
const app = express()

const api_data = require('./api');

app.get('/api', (req, res) => {
    res.json(api_data);
});

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on: http://localhost:${process.env.PORT}`);
})