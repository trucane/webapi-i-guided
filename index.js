const express = require('express');

const server = express();


server.get('/', (req, res) => {
    res.send('Hello Web20 node edition')
});

const port = 5000;

server.listen(port, () => console.log('We are on posrt 5000') );