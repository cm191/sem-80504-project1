const { Router } = require('express');
const router = Router();
const version = require('./version');

router.get('/', (req, res) => {
	res.send('hello\n');
});

router.use('/version', version);

module.exports = router;
