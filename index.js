const express = require('express');
const server = require('./server');
const PORT  = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.status(200).send('<h1>Data Modeling</h1>');
});

server.listen(PORT, () => {
    console.log(`Server Running On Port: ${PORT}`);
})