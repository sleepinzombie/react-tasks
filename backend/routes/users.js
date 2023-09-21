const express = require('express');
const router = express.Router();


router.get('/user/:ide', (req, res) => {
    res.send('log users')
})


module.exports = router;