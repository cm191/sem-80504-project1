const { Router } = require('express');
const router = Router();

const version = require('./version');
const logs = require('./logs');

router.get('/', (req, res) => {
	res.send('hello\n');
});

router.use('/version', version);
router.use('/logs', logs);

module.exports = router;
