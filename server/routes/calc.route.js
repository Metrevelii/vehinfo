const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const calcControllers = require('../controllers/calc.controller');


router.post('/calc', auth('createAny', 'auction'), calcControllers.addAuction);


module.exports = router;