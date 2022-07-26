const { json } = require('stream/consumers')
const funct = require('./config/functions.js')
const mode = require('./config/mode.js')
const config = require('./config/config.js')
const { syncBuiltinESMExports } = require('module')
const a = config.address
const b = mode.mode

i = 0
var first = true
var dates = []
var values = []
var outs = 0
var ins = 0

if( b === '1') console.log('Jeszcze nie ma tej opcji')
if ( b === '2'){
  fetch('http://api.polygonscan.com/api?module=logs&action=getLogs&address=' + a + '&apikey=NWP8XWDDAGB5MKZVJY6X661BJMA39H2GRE').then(res =>  res.json())
  .then(date => 
    intervalID = setInterval( function () {
        if (first){ first = false }
        else
        {
          fetch('https://api.polygonscan.com/api?module=proxy&action=eth_getTransactionByHash&txhash=' + date.result[i].transactionHash + '&apikey=NWP8XWDDAGB5MKZVJY6X661BJMA39H2GRE').then(res2 => res2.json())
          .then(function(date2) {
              console.log(i)
              dates[i] = date.result[i].timeStamp * 1000
              if (date2.result.to === '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45'){
                values[i] = 'OUT ' + (date2.result.value * 1000) / Math.pow(10, 6) 
                outs ++
              } 
              else {
                values[i] = 'IN ' + (date2.result.value * 1000) / Math.pow(10, 6)
                ins ++
              }
              console.log(values[i] + ' ' + dates[i])
              
              })
          .catch (error => {
            clearInterval(intervalID)
            // values = bu2(dates, values)
            // dates = bu(dates, values)
            for (let j = 0; j < dates.length; j++){ dates[j] = dt(dates[j]) + ' ' + ti(dates[j])}
            for (let j = 0; j < dates.length; j++){ console.log(values[j] + ' ' + dates[j])}
            console.log("IN tokens: " + ins)
            console.log("OUT tokens: " + outs)
            console.log('End')
          }
            )
          i++
        }
    }, 500))
}





          // if (date2.result.to === '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45') dates[i] = 'OUT ' + (date2.result.value * 1000) / Math.pow(10, 6), /*date.result[i].transactionHash,*/ dt(date.result[i].timeStamp * 1000), ti(date.result[i].timeStamp * 1000)
          // else dates[i] = 'IN ' + (date2.result.value * 1000) / Math.pow(10, 6), /*date.result[i].transactionHash,*/ dt(date.result[i].timeStamp * 1000), ti(date.result[i].timeStamp * 1000)