const { Router } = require('express');
let fs = require('fs');

const router = Router();

router.get('/', (req, res) => {
    res.send('This is version 0 of the HotBurger service');
});

module.exports = router;
