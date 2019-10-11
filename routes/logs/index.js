const { Router } = require('express');
let fs = require('fs');
const logger = require('./logger');

const router = Router();

router.get('/', (req, res) => {
    res.send(logger.printLog());
    logger.logRequest(`request made for /logs. response returned successfully`);
});

module.exports = router;
