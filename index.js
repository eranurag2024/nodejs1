// Simple http Server
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200 , {"Content-Type"  : "text/plain"});
    res.end("My First Node JS Application is Running .....");
});

const PORT = process.env.PORT || 5500;

server.listen(PORT , () => console.log("Server is running on Port 5500..."));