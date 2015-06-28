var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('multipleChoice', ['multipleChoice','match','truefalse']);

var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/angularSPA"));
app.use(bodyParser.json());

app.get('/multipleChoice', function(req, res) {
    //console.log(res);
    db.multipleChoice.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.get('/match', function(req, res) {
    //console.log(res);
    db.match.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.get('/truefalse', function(req, res) {
    //console.log(res);
    db.truefalse.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});






app.listen(3000);
console.log("server running on port 3000");

