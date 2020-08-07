const express = require('express');
const app = express();
const server = require('http').Server(app)

const PORT = 5000;

app.get('/', (req, res) => {
    res.status(200).send("Video-Chat-Rajvardhan")
})

server.listen(PORT,()=> {
    console.log("server is running on : "+PORT);
})