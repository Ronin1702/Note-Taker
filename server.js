const express = require('express');
//get apiRoutes module
const apiRoutes = require('./routes/apiRoutes');
//get htmlRoutes module
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware clog.js
const { clog } = require('./middleware/clog');
app.use(clog)

// Middleware for parsing application/json and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//point to public folder from root
app.use(express.static('public'));

// Use apiRoutes for /api/* requests and htmlRoutes for all others
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`This app is now running on: http://localhost:${PORT}`));