const express = require('express');
const router = express.Router();
const Member = require('../models/member');

// GET request
router.get("/members", function(req, res, next) {
  Member.aggregate([{
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
      },
      distanceField: "dist.calculated",
      includeLocs: "dist.location",
      maxDistance: 100000,
      spherical: true
    }
  }])
    .then(function(member) {
      res.send(member);
    })
    .catch(next);
});


// POST request | add a new member to the db
router.post('/members', function(req, res, next) {
    Member.create(req.body).then(function(member) {
        res.send(member);
    }).catch(next);
});

// UPDATE (put) request to put a new record in the db/collection
router.put('/members/:id', function(req, res, next) {
    Member.findByIdAndUpdate({_id:req.params.id}, req.body).then(function() {
        Member.findOne({_id:req.params.id}).then(function(member) {
           res.send(member);  
        });
        
    });
   
});

// DELETE request
router.delete('/members/:id', function(req, res, next) {
    Member.findByIdAndRemove({_id:req.params.id}).then(function(member) {
        res.send(member);
    });
});


module.exports = router;