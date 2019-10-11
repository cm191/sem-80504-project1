const { Router } = require('express');
let fs = require('fs');
const logger = require('../logs/logger');

const router = Router();

router.get('/', (req, res) => {
    res.send('This is version 0 of the HotBurger service');
    logger.logRequest(`request made for /version. response returned successfully\n`);
});

module.exports = router;
