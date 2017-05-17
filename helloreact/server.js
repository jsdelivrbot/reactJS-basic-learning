var express = require('express');

//create app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('express running at localhost:3000');
});
