const express = require('express');
const app = express();
const codeforces = require('./codeforces');

const supported = new Map();
supported.set('cf', codeforces);
app.get('/api/contests', async (req, res) => {
    promises = [];
    supported.forEach((value, key) => {
        const data = value(5);
        promises.push(data);
    });
    body = "";
    for (i = 0; i < promises.length; i++) {
        const data = await promises[i];
        body += JSON.stringify(data);
    }
    res.send(body);
});
app.get('/api/contests/:name', async (req, res) => {
    if (!supported.has(req.params.name)) {
        res.status(404).send("This source doesn't exist!");
        return;
    }
    const data = await supported.get(req.params.name)(5).catch(() => {
        throw new Error('Something broke!');
    });
    res.send(data);
})



const port = 3000;
app.listen(port, () => (console.log(`Listening on port ${port}...`)));