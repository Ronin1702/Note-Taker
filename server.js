const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Create Express.js routes for default '/', '/notes' and '/api' endpoints
app.get('/', (req, res) => res.send('public/index.html'));

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//send database json to /api/notes if it exist, if not return a 404 message
app.get('/api/notes', (req, res) => {
    //read db.json
    fs.readFile('db/db.json', 'utf-8', (error, data) => {
        // error returns a 404 message
        if (error) return res.status(400).json({ error: 'Bad Request' });
        // else return data to the notes
        res.json(JSON.parse(data));
    });
});

//post notes and saves to db.json
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    fs.readFile('db/db.json', 'utf-8', (error, data) => {
        const db = JSON.parse(data)
        const postData = { id: uuid(), title: title, text: text }

        db.push(postData);

        const newData = JSON.stringify(db);

        if (error) return res.status(404).json({ error: 'file not found' });
        fs.writeFile('data/db.json', newData, (error) => {
            if (error) throw error;
            res.status(200).json({ success: 'Note Saved!' });
        });
    });
});

//delete notes from db.json based on a given id
app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    fs.readFile('db/db.json', 'utf-8', (error, data) => {
        const db = JSON.parse(data);
        const dbIndex = db.findIndex(Object => Object.id === noteId);
        //if there no such an ID
        if (dbIndex === -1) {
            res.status(404).send('Note Not Found based on given ID.');
            return;
        }
        db.splice(dbIndex, 1);
        if (error) return res.status(400).json({ error: 'Bad Request' });
        fs.writeFile('db/db.json', JSON.stringify(db), error => {
            if (error) return res.status(400)({ error: 'Bad Request' });
            res.status(200).json({ success: 'Note Deleted!' });
        });
    });
});

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>

    // log a message to the terminal with the connected server location
    console.log(`This app is now running on: http://localhost:${PORT}`)
);