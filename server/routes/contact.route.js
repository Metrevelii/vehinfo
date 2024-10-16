const express = require('express');
const { createContact } = require('../controllers/contact.controller');
// const { createContactValidator } = require("../middleware/contactValidator");
const router = express.Router();

router.post('/',  createContact);

module.exports = router;