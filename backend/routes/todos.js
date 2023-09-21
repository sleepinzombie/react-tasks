const express = require('express');
const router = express.Router();


router.get('/:userId/all', (req, res) => {
    const user = req.params.userId;

    res.send(`user Id : ${user}`)
});


router.get('/:userId/completed', (req, res) => {
    const user = req.params.userId;

    res.send(`user Id : ${user}`)
});


router.get('/:userId/trashed', (req, res) => {
    const user = req.params.userId;

    res.send(`user Id : ${user}`)
})


module.exports = router;