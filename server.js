const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const cakesRoutes = require('./routes/cakes.routes');
const pastriesRoutes = require('./routes/pastries.routes')

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the React app
/*app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/client/public')));*/

/* API ENDPOINTS */
app.use('/api', pastriesRoutes);
app.use('/api', cakesRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
/*
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});*/

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/CakeShop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+ port);
});
