const fs = require('fs');
const uuid = require('uuid');

// Define functions for reading, writing, and deleting notes, then export them

module.exports = {
    getNotes: function (req, res) {
        //read db.json and check if it exists
        fs.readFile('db/db.json', 'utf-8', (err, data) => {
            // error returns a 400 message
            if (err) return res.status(400).json({ error: 'Bad Request: No Notes Saved' });
            // else return data to the notes
            res.json(JSON.parse(data));
        });
    },
    createNote: function (req, res) {
        //deconstruct db.json
        const { title, text } = req.body;

        fs.readFile('db/db.json', 'utf-8', (err, data) => {
            if (err) return res.status(400).json({ error: 'No Notes Saved in Database' });
            const notes = JSON.parse(data)
            const newNote = { id: uuid.v4(), title: title, text: text }

            notes.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
                if (err) return res.status(400).json({ error: 'Failed to Save New Note' });
                res.status(200).json({ success: 'New Note Saved!' });
            });
        });
    },
    deleteNote: function (req, res) {
        
        //define note IDs
        const noteId = req.params.id;
        
        fs.readFile('db/db.json', 'utf-8', (err, data) => {
            let notes = JSON.parse(data);
            let noteIndex = notes.findIndex(Object => Object.id === noteId);
            //if there are no notes to begin with:
            if (noteIndex === -1) {
                res.status(404).send('No Notes to Delete.');
                return;
            }
            notes.splice(noteIndex, 1);
            if (err) return res.status(400).json({ error: 'Failed to Delete' });
            fs.writeFile('db/db.json', JSON.stringify(notes, null, 2), (err) => {
                if (err) return res.status(400)({ error: 'Failed to Update Delete' });
                res.status(200).json({ success: 'Note Deleted!' });
            });
        });
    },
};