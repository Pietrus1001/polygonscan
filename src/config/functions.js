function currenttime(data){
	let d = new Date(data)
	let h = d.getHours()
	let m = d.getMinutes()
	let s = d.getSeconds()
	h = String(h)
	m = String(m)
	s = String(s)
	let time = h + ':' + m + ':' + s + '\n'
	return time
}

function currentdate(data){
	let d = new Date(data)
	let y = d.getFullYear()
	let m = d.getMonth()
	let da = d.getDate()
  	if (m < 10)  m = String('0' + m)
 	if (da < 10) m = String('0' + da)
	y = String(y)
	m = String(m)
	da = String(da)
	let date = da + '.' + m + '.' + y + 'r.'
	return date
}

ti = currenttime
dt = currentdate

module.exports.ti
module.exports.dt