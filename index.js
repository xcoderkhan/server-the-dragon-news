const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
const categories = require('./data/categories.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('News is comming soon');
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`News running port: ${port}`);
})
