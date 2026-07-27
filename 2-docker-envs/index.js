const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

var DEFAULT_WHO = "World";
var WHO = process.env.WHO || DEFAULT_WHO;

app.get('/', function (req, res) {
    res.send('Hello ' + WHO + '. Wish you were here.\n');
});

app.listen(PORT, function () {
    console.log('Server running on port ' + PORT);
});
