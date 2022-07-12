const express = require('express')
const app = express()

const wPort = 8090

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(wPort, () => {
    console.log('Web start at port ' + wPort);
})