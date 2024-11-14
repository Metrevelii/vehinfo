const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const auth = require('../middleware/auth');

router.route('/profile')
.get(auth('readOwn','profile'),usersController.profile)
.patch(auth('updateOwn','profile'),usersController.updateProfile)


router.patch('/email', auth('updateOwn','profile'), usersController.updateUserEmail);
router.get('/verify', usersController.verifyAccount);

router.post('/password-reset-request', usersController.requestPasswordReset);  
router.post('/password-reset', usersController.resetPassword);

module.exports = router;