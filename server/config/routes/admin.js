const express = require('express');
const router = express.Router();
const admin = require('../../controllers/admin');

router.post('/login', admin.login);
router.post('/signup', admin.newUser);

module.exports = router;