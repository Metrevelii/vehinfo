const express = require('express');
const { createContact, getAllContacts } = require('../controllers/contact.controller');
// const { createContactValidator } = require("../middleware/contactValidator");
const router = express.Router();

router.post('/',  createContact);
router.get('/all', getAllContacts);
module.exports = router;