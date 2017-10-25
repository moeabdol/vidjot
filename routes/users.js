const express = require('express');
const router  = express.Router();
const users   = require('../controllers/users');

router.get('/signin', users.signin);
router.post('/signin', users.enter);
router.get('/signup', users.signup);
router.post('/signup', users.create);
router.get('/signout', users.signout);

module.exports = router;
