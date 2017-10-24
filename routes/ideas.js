const express = require('express');
const router  = express.Router();
const ideas   = require('../controllers/ideas');

router.get('/', ideas.index);

module.exports = router;
