const { Router } = require('express');
let fs = require('fs');

const router = Router();

router.get('/', (req, res) => {
    res.send('This is the logger');
});

module.exports = router;
