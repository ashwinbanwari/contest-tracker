const express = require('express');
const app = express();
const codeforces = require('./codeforces');

const supported = new Map();
supported.set('cf', codeforces);
app.get('/', async (req, res) => {
    const data = await supported.get('cf')(5);
    res.send(data);
});



const port = 3000;
app.listen(port, () => (console.log(`Listening on port ${port}...`)));