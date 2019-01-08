const express = require("express");
const router = express.Router();
const Member = require('../models/member.js');

// get a list of member from the database
router.get('/members', function (req,res){
    res.send({
        type: 'GET'
        
    });
});

// add a new member to the database
router.post('/members', function (req,res){
    // var member = new Member(req.body);
    // member.save();
    Member.create(req.body).then(function(member){
        res.send(member);
    });
});
    

// update a member in the datbase
router.put('/members/:id', function (req,res){
    res.send({type: 'PUT'});
});

// delete a member from the datatbase
router.delete('/members/:id', function (req,res){
    res.send({type: 'DELETE'});
});

module.exports = router;