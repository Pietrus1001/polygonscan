const { json } = require('stream/consumers')
const funct = require('./config/functions.js')
const address = require('./config/config.js')
const { syncBuiltinESMExports } = require('module')
const a = address.address

i = 0
var dates = [100000]
var values = [100000]

fetch('http://api.polygonscan.com/api?module=logs&action=getLogs&address=' + a + '&apikey=NWP8XWDDAGB5MKZVJY6X661BJMA39H2GRE').then(res =>  res.json())
.then(date => 
  intervalID = setInterval( function () {
      fetch('https://api.polygonscan.com/api?module=proxy&action=eth_getTransactionByHash&txhash=' + date.result[i].transactionHash + '&apikey=NWP8XWDDAGB5MKZVJY6X661BJMA39H2GRE').then(res2 => res2.json())
      .then(function(date2) {
          console.log(i)
          dates[i] = date.result[i].timeStamp * 1000
          if (date2.result.to === '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45') values[i] = 'OUT ' + (date2.result.value * 1000) / Math.pow(10, 6)
          else values[i] = 'IN ' + (date2.result.value * 1000) / Math.pow(10, 6) /*date.result[i].transactionHash,*/
          console.log(values[i] + ' ' + dates[i])
          
          })
      .catch (error => {
        clearInterval(intervalID)
        dates, values = bu(dates, values)
        for (let j = 0; j < i; j++){ dates[j] = dt(date.result[j].timeStamp) + ' ' + ti(date.result[j].timeStamp)}
        for (let j = 0; j < i; j++){ console.log(values[j] + ' ' + dates[j])}
        console.log('End')
      }
        )
      i++
  }, 400))






          // if (date2.result.to === '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45') dates[i] = 'OUT ' + (date2.result.value * 1000) / Math.pow(10, 6), /*date.result[i].transactionHash,*/ dt(date.result[i].timeStamp * 1000), ti(date.result[i].timeStamp * 1000)
          // else dates[i] = 'IN ' + (date2.result.value * 1000) / Math.pow(10, 6), /*date.result[i].transactionHash,*/ dt(date.result[i].timeStamp * 1000), ti(date.result[i].timeStamp * 1000)