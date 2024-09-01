var express = require('express')
const PORT = process.env.PORT || 8080 || 5000 || 3000

var apirouter = require('./src/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces", 2)
const fs = require('fs')

global.patuUrl = {full:'',ori:''}

app.get('/', (req, res) => {
    res.json({
        status: true,
        creator: `Alokk`,
        message: "Rest Api Key Ini Buatan ( M.saiful.anam.r ) apikey ini buat bot nya sendiri yaitu sitotes-md"
    })
})

app.use('/', apirouter)

app.listen(PORT, '0.0.0.0', () => {
    console.log("Server running on port " + PORT);
});

module.exports = app