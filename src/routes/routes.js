const express = require('express');
const router = express.Router();

const controller = require('../controllers/crawler-controller')

router.post('/', controller.post);

module.exports = router;