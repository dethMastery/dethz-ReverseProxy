const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const cors = require('cors');

const wPort = 8090

app.use(cors());

let cOPT = {
    origin: '*',
    optionsSuccessStatus: 200
}

let link = ""

app.use('/', cors(cOPT), proxy(link));

app.listen(wPort, () => {
    console.log('Web start at port ' + wPort);
})