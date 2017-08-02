const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
//app setup

app.use(morgan('conbined'));
app.use(bodyParser.json({ type: '*/*' }));



//server setup 
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening to the ', port);