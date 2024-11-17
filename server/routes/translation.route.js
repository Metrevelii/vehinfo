const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const translationController = require('../controllers/translations.controller');


router.route('/')
    .get(translationController.getTranslationArgs)
    .post(auth('createAny','translations'), translationController.postTranslationArgs)
    .patch(auth('updateAny','translations'), translationController.updateTranslationArgs)

module.exports = router;