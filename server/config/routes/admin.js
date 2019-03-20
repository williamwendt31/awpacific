const express = require('express');
const router = express.Router();
const admin = require('../../controllers/admin');

router.get('', admin.home);

module.exports = router;