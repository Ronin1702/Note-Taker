//npm i uuid
const uuid = require('uuid')
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// This is for Heroku's process.env.PORT or localhost:3000
const PORT = process.env.PORT || 3000;

// Middleware for parsing application/json and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//point to public folder from root
app.use(express.static('public'));

// Create Express.js routes for default '*', '/notes' and '/api/notes' endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Notes HTML routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


// API Routes
//send db.son to /api/notes if it exist, if not return a 400 message
app.get('/api/notes', (req, res) => {
    //read db.json and check if it exists
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        // error returns a 400 message
        if (err) return res.status(400).json({ error: 'Bad Request: No Notes Saved' });
        // else return data to the notes
        res.json(JSON.parse(data));
    });
});

//post notes and saves to db.json
//Working!
app.post('/api/notes', (req, res) => {
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
});

//delete notes from db.json based on a given id
// Status: Working! N ed to change status codes to be better reflect error.

app.delete('/api/notes/:id', (req, res) => {
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
});

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>

    // log a message to the terminal with the connected server location
    console.log(`This app is now running on: http://localhost:${PORT}`)
);