const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const translationController = require('../controllers/translations.controller');


router.route('/:language')
    .get(translationController.getTranslations)
    .patch(auth('updateAny','translations'), translationController.updateTranslations);

router.route('/')
.post(auth('createAny','translations'), translationController.addTranslations);

module.exports = router;