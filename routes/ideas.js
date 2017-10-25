const express = require('express');
const router  = express.Router();
const ideas   = require('../controllers/ideas');
const authHelpers = require('../helpers/auth');

router.get('/', authHelpers.ensureAuthenticated, ideas.index);
router.get('/add', authHelpers.ensureAuthenticated, ideas.add);
router.post('/', authHelpers.ensureAuthenticated, ideas.create);
router.get('/edit/:id', authHelpers.ensureAuthenticated, ideas.edit);
router.put('/:id', authHelpers.ensureAuthenticated, ideas.update);
router.delete('/:id', authHelpers.ensureAuthenticated, ideas.destroy);

module.exports = router;
