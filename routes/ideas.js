const express = require('express');
const router  = express.Router();
const ideas   = require('../controllers/ideas');

router.get('/', ideas.index);
router.get('/add', ideas.add);

module.exports = router;
