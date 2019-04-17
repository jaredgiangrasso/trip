var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join('/index.html'));
});

app.listen(8080, function(){console.log('Listening on port 8080')});