// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3000;

const api = require('./db/db.json')
const notes = require('./');

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => res.send('public/index.html'));

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);


// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>

    // log a message to the terminal with the connected server location
    console.log(`App is on Server: http://localhost:${PORT}`)
);