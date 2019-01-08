const express = require("express");
const router = express.Router();
const Member = require('../models/member.js');

// get a list of member from the database
router.get('/members', function (req,res,next){
    res.send({
        type: 'GET'
        
    });
});

// add a new member to the database
router.post('/members', function (req,res,next){
    // var member = new Member(req.body);
    // member.save();
    Member.create(req.body).then(function(member){
        res.send(member);
    }).catch(next);
});
    

// update a member in the datbase
router.put('/members/:id', function (req,res,next){
    Member.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Member.findOne({_id: req.params.id}).then(function(member){
           res.send(member);  
        });
       
    });
});

// delete a member from the datatbase
router.delete('/members/:id', function (req,res,next){
    Member.findByIdAndRemove({_id: req.params.id}).then(function(member){
    res.send(member);
    });
});

module.exports = router;