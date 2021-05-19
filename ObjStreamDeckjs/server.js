const express = require('express');
const app = express();
const port = 3000;
const host = "localhost";
const bodyParser = require('body-parser');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, host, () => {
    console.log(`Server is listening on ${host}:${port}`);
});
