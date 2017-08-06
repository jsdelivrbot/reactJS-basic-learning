const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const router = require('./router');

const mongoose = require('mongoose');

//DB setup

mongoose.connect('mongodb://admin:123456@ds159050.mlab.com:59050/react-redux-auth')

//app setup
app.use(morgan('conbined'));
app.use(bodyParser.json({
  type: '*/*'
}));
router(app);


//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening to the ', port);
