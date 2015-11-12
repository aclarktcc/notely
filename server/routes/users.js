var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

// List all notes
router.get('/:username', function(req, res) {
  User.findOne({username: req.params.username}).then(function(users) {
    res.json(users);
  });
});

// Create a new note
router.post('/', function(req, res) {
  var user = new User({
    name: req.body.user.name,
    username: req.body.user.username,
    password_digest: bcrypt.hashSync(req.body.user.password)

  });

  user.save().then(function(userData) {
    res.json({
      message: 'Thanks for signing up!!',
      user: userData,
      auth_token: jwt.sign(userData._id, process.env.JWT_SECRET, {
        expiresIn: 60*60*24
      })
    });
  });
});

// Update an existing note
router.put('/:id', function(req, res) {
  User.findOne({ _id: req.params.id }).then(function(user) {
    user.name = req.body.user.name;
    user.username = req.body.user.username;
    user.save().then(function() {
      res.json({
        message: 'Your changes have been saved.',
        user: user
      });
    });
  });
});

router.delete('/:id', function(req, res) {
  User.findOne({ _id: req.params.id }).then(function(user) {
    user.remove().then(function() {
      res.json({
        message: 'That user has been deleted.',
        user: user
      });
    });
  });
});


module.exports = router;
