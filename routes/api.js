const express = require('express');
const router = express.Router();

// get a list of members from the database
router.get('/members', function(req,res){
    res.send({type: 'GET'});
});

//add new memebr to DB
router.post('/members', function(req,res){
    res.send({type: 'POST'});
    
});

//update a member in DB
router.put('/members/:id', function(req,res){
    res.send({type: 'PUT'});
});

//delete member from DB
router.delete('/members/:id', function(req,res){
    res.send({type: 'DELETE'});
});

module.exports = router;