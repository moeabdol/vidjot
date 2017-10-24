const express = require('express');
const router  = express.Router();
const ideas   = require('../controllers/ideas');

router.get('/', ideas.index);
router.get('/add', ideas.add);
router.post('/', ideas.create);
router.get('/edit/:id', ideas.edit);

module.exports = router;
