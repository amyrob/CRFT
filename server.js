const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());
server.use(express.static('client/public'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if(err) {
    console.error(err);
    return;
  };
  const db = client.db('CRFT_db');
  console.log('Connected to *CRFT*');
  const pubCollection = db.collection('pubs');

  server.post('/crft', function(req, res) {
    const newPub = req.body;

    pubCollection.save(newPub, function (err, res) {
      if(err) {
        console.error(err);
        res.status(500);
        res.send();
      };
      console.log('Saved');
      res.status(201);
      res.json(result.ops[0]);
    });
  });

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
