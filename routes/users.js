const express = require('express');
const router  = express.Router();
const users   = require('../controllers/users');

router.get('/signin', users.signin);
router.get('/signup', users.signup);

module.exports = router;
