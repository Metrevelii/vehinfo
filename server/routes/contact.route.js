const express = require('express');
const { createContact, getAllContacts, deleteContact } = require('../controllers/contact.controller');
// const { createContactValidator } = require("../middleware/contactValidator");
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/',  createContact);
router.get('/all', getAllContacts);
router.delete('/:id', auth('deleteAny','contact') ,deleteContact);
module.exports = router;