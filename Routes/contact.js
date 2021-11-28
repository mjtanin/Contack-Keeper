const express = require('express');

const router = express.Router();

// @route   GET api/contact
// @desc    Get all contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route   POST api/contact
// @desc    Create a new Contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add new contact');
});

// @route   PUT api/contact
// @desc    Update Contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route   DELETE api/contact
// @desc    Delete Contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;