var moment = require('moment');

console.log(moment().format());

// January

var now = moment();

console.log("current timeStamp" + now.unix());

var timeStamp = 1459111648;

var currentMoment = moment.unix(timeStamp);

console.log("current moment" + currentMoment.format('MMM D, YY @ h:mm a'));