const express = require('express');

const router = express.Router();

// @routs   GET api/auth
// @desc    User Log in
// @access  Private
router.get('/', (req, res) => {
    res.send('User Login Successfully');
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send('Login user');
})


module.exports = router;