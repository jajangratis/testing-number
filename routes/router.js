const express = require('express');
let router = express.Router();

/**
 * Controller
 */
 const numberTesterController = require('../api/numberTester/numberTesterController')
 router.post('/test-number', numberTesterController.postTestNumber);

 module.exports = router;