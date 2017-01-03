'use strict';

var express = require('express');
var app = express();
require('dotenv').config({
    silent: true
});

app.set('view options', {layout: false});
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 8080;

var googleSearch = require('./search.google');
var mongoDB = require('./db.mongo');
var mongoCollection = 'latest';

app.get('/imagesearch/:query', function (req, res) {
    var query = req.params.query;
    var offset = req.query.offset;

    googleSearch(query, offset, function (err, response) {
        if (err) {
            console.log('googleSearch error!');
            console.log(err);
            return res.send(err);
        }

        var dtNow = new Date();
        var objMongo = {
            'term': query,
            'when': dtNow.toISOString()
    };
        mongoDB.insertDocument(mongoCollection, objMongo);

        var objImages = response.items.map(function (item) {
            return {
                'url': item.link,
                'snippet': item.snippet,
                'thumbnail': item.image.thumbnailLink,
                'context': item.image.contextLink
            };
        });
        res.send(objImages);
    });
});

app.get('/latest/imagesearch/', function (req, res) {
    mongoDB.findDocuments(mongoCollection, {}, {'_id': false}, 10, {'when': -1}, function (docs) {
        res.send(docs);
    });
});

app.listen(port);
