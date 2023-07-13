const express = require('express');
const router = express.Router();
const dbHandler = require('../handlers/dbHandler');

router.get('/notes', dbHandler.getNotes);
router.post('/notes', dbHandler.createNote);
router.delete('/notes/:id', dbHandler.deleteNote);

module.exports = router;