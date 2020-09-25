const express = require('express');
const app = express();


app.get('/', (req, res) => {
    console.log('sup');
    res.send("hello");
})


const port = 3000;
app.listen(port, () => (console.log(`Listening on port ${port}...`)));