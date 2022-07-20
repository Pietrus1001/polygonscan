const { json } = require('stream/consumers');
const funct = require('./config/functions.js')
const address = require('./config/config.js')
const a = address.address

i = 0

fetch('http://api.polygonscan.com/api?module=logs&action=getLogs&address=' + a + '&apikey=NWP8XWDDAGB5MKZVJY6X661BJMA39H2GRE')
.then(res =>  res.json())
.then(date => 
intervalID = setInterval( function () {
  try {
console.log(dt(date.result[i].timeStamp * 1000), ti(date.result[i].timeStamp * 1000))
i ++
  }catch (e) {console.log('Koniec'), clearInterval(intervalID)}
}, 0))







