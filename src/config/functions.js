function currenttime(data){
	let d = new Date(data)
	let h = d.getHours()
	let m = d.getMinutes()
	let s = d.getSeconds()
	h = String(h)
	m = String(m)
	s = String(s)
	let time = h + ':' + m + ':' + s
	return time
}

function currentdate(data){
	let d = new Date(data)
	let y = d.getFullYear()
	let m = d.getMonth() + 1
	let da = d.getDate()
  	if (m < 10)  m = String('0' + m)
 	if (da < 10) m = String('0' + da)
	y = String(y)
	m = String(m)
	da = String(da)
	let date = da + '.' + m + '.' + y + 'r.'
	return date
}

function bubble(arr, arr2) {
	var len = arr.length
  
	for (var i = 0; i < len ; i++) {
	  for(var j = 0 ; j < len - i - 1; j++){
	  if (arr[j] > arr[j + 1]) {
		var temp = arr[j]
		arr[j] = arr[j+1]
		arr[j + 1] = temp

		var temp2 = arr2[j]
		arr2[j] = arr2[j+1]
		arr2[j + 1] = temp2
	  }
	 }
	}
	return arr
  }

function bubble2(arr, arr2) {
	var len = arr.length

	for (var i = 0; i < len ; i++) {
		for(var j = 0 ; j < len - i - 1; j++){
			if (arr[j] > arr[j + 1]) {
			var temp = arr[j]
			arr[j] = arr[j+1]
			arr[j + 1] = temp

			var temp2 = arr2[j]
			arr2[j] = arr2[j+1]
			arr2[j + 1] = temp2
			}	
		}
	}
	return arr2
}

bu2 = bubble2
bu = bubble
ti = currenttime
dt = currentdate

module.exports.ti
module.exports.dt
module.exports.bu
module.exports.bu2