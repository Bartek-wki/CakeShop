const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const cakesRoutes = require('./routes/cakes.routes');
const pastriesRoutes = require('./routes/pastries.routes')
const ordersRoutes = require('./routes/orders.routes')

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/client/public')));

/* API ENDPOINTS */
app.use('/api', pastriesRoutes);
app.use('/api', cakesRoutes);
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

/* MONGOOSE */
// connects our backend code with the database
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';
const password = process.env.password;

if(NODE_ENV === 'production') dbUri = 'mongodb+srv://Bartek-wki:' + password + '@cluster0.qoovd.mongodb.net/CakeShopDB?retryWrites=true&w=majority';
else dbUri = 'mongodb://localhost:27017/CakeShop';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
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
