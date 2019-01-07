const express = require('express');
const router = express.Router();

// get a list of members from the database
router.get('/members', function(req,res){
    res.send({type: 'GET'});
});

//add new member to DB
router.post('/members', function(req,res){
    console.log(req.body);
    res.send({type: 'POST',
    name: req.body.name,
    rank: req.body.rank
    });
    
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