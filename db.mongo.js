'use strict';

var MongoClient = require('mongodb').MongoClient;
var dbURL = process.env.MONGOLAB_URI;
var assert = require('assert');

module.exports = {
    connectMongo: function (callback) {
        MongoClient.connect(dbURL, function (err, db) {
            if (err) {
                console.log('MongoDB Error: connect to the MongoDB database!')
            }
            assert.equal(null, err);
            callback(db);
        });
    },

    insertDocument: function (mongoCollection, newObj) {
        this.connectMongo(function (db) {
            var col = db.collection(mongoCollection);
            col.insertOne(newObj, function (err, result) {
                if (err) {
                    console.log('MongoDB Error: insert one document!')
                }
                assert.equal(err, null);
                console.log('Inserted a document into the ' + mongoCollection + ' collection. InsertedId: ' + result.insertedId + '.');
                db.close();
            });
        });
    },

    findOneDocument: function (mongoCollection, query, callback) {
        this.connectMongo(function (db) {
            var col = db.collection(mongoCollection);
            col.findOne(query, function (err, result) {
                if (err) {
                    console.log('MongoDB Error: find one document!')
                }
                assert.equal(null, err);
                db.close();
                callback(result);
            });
        });
    },

    findDocuments: function (mongoCollection, query, fields, limit, sort, callback) {
        this.connectMongo(function (db) {
            var col = db.collection(mongoCollection);
            col.find(query, {fields: fields, limit: limit, sort: sort}).toArray(function(err, docs) {
                if (err) {
                    console.log('MongoDB Error: find many documents!')
                }
                assert.equal(null, err);
                db.close();
                callback(docs);
            });
        });
    }
};