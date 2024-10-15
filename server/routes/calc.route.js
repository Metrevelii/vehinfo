const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const calcControllers = require('../controllers/calc.controller');


router.route('/calc/:id')
.get( calcControllers.getAuction )
.delete( auth('deleteAny','auction'), calcControllers.deleteAuctionById )

router.post('/calc', auth('createAny', 'auction'), calcControllers.addAuction);
router.post('/calc/:id/location', auth('createAny', 'location'), calcControllers.addLocationToAuction);


module.exports = router;