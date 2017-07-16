const express = require('express');

// const home = require('./home');
const render = require('./render');

const router = express.Router();

router.get('*', render);
// router.get('/api/:variable/:variable?', module);

module.exports = router;
