const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const table = require('./routes/table');
const reservation = require('./routes/reservation');

const app = express();

mongoose.connect('mongodb://localhost/trms');
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, 'client')));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/table', table);
app.use('/api/reservation', reservation);

app.listen(process.env.port || 3000, () => {
    console.log('Express listening for requests..');
});