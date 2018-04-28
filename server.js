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
  const pubsCollection = db.collection('pubs');

//INDEX ROUTE
  server.get('/crft/admin', function(req, res) {
    pubsCollection.find().toArray(function(err, allPubs){
      if (err){
        console.error(err);
        res.status(500);
        res.send();
      };
      res.json(allPubs);
    });
  });

//SHOW ROUTE
  server.get('/crft/admin/:id', function(req, res){
    const id = req.params.id;
    const objectID = ObjectID(id);
    pubsCollection.findOne({_id:objectID}, function(err, result){
      if (err){
        console.error(err);
        res.status(500);
        res.send();
      };
      res.send(result);
    })
  })

//CREATE ROUTE
  server.post('/crft/admin', function(req, res) {
    const newPub = req.body;

    pubsCollection.save(newPub, function (err, result) {
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

//UPDATE ROUTE
  server.put('crft/admin/:id', function(req, res){
    const updatedPub = req.body;

    const id = req.params.id;
    const objectID = ObjectID(id);
    pubsCollection.update({_id:objectID}, updatedPub, function(err, result){
      if(err) {
        console.error(err);
        res.status(500);
        res.send();
      };
      res.status(204);
      res.send();
    });

  });

//DESTROY ALL ROUTE
  server.delete('/crft/admin', function(req, res){
    pubsCollection.deleteMany({}, function(err, result){
      if(err) {
        console.error(err);
        res.status(500);
        res.send();
      };
      res.send();
    });
  });

  //DESTROY ONE
  server.delete('/crft/admin/:id', function(req, res){
    const id = req.params.id;
    const objectID = ObjectID(id);
    pubsCollection.deleteOne({_id:objectID}, function(err, result){
      if(err) {
        console.error(err);
        res.status(500);
        res.send();
      };
      res.status(204);
      res.send();
    })
  })



  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
