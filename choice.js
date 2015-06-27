var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('multipleChoice', ['multipleChoice','match']);

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

app.post('/multipleChoice',function(req,res) {
    console.log(req.body);
    db.multipleChoice.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});




app.listen(3000);
console.log("server running on port 3000");

