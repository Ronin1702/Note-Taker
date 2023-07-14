const express = require('express');
const router = express.Router();
const dbHandler = require('../handlers/dbHandler');
const authChecked = require('../handlers/authChecked');

router.get('/notes', dbHandler.getNotes);
router.post('/notes', dbHandler.createNote);
router.delete('/notes/:id', authChecked, dbHandler.deleteNote);

module.exports = router;