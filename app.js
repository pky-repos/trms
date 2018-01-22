const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const table = require('./routes/table');
const reservation = require('./routes/reservation');

const app = express();

mongoose.connect('mongodb://panky.asg@gmail.com:crazysexy1@ds111608.mlab.com:11608/trms');
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, err) =>{
    res.sendFile(path.join(__dirname, 'client', 'dist/index.html'));
});

app.use('/api/table', table);
app.use('/api/reservation', reservation);

app.listen(process.env.port || 3000, () => {
    console.log('Express listening for requests..');
});