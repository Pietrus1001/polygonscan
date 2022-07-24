const { Console } = require("console")

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

function currenttimearr(data){
	let d = new Date(data)
	let h = d.getHours()
	let m = d.getMinutes()
	let s = d.getSeconds()
	return ([h, m, s])
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
function currentdatearr(data) {
	let d = new Date(data)
	let y = d.getFullYear()
	let m = d.getMonth() + 1
	let da = d.getDate()
	return ([y, m, da])
	
}
function bubble(arr, arr2) {
	var len = arr.length
  
	for (var i = 0; i < len ; i++) {

	  	for(var j = 0 ; j < len - i - 1; j++){

			let datearr1 = currentdatearr(arr[j])
			let datearr2 = currentdatearr(arr[j+1])
			let timearr1 = currenttimearr(arr[j])
			let timearr2 = currenttimearr(arr[j+1])

			if (datearr1[0] == datearr2[0]) {
				if (datearr1[1] == datearr2[1]) {
					if (datearr1[2] == datearr2[2]) {
						if (timearr1[0] == timearr2[0]) {
							if (timearr1[1] == timearr2[1]) {
								if (timearr1[2] == timearr2[2]) {
						
								} 
								else if(timearr1[2] > timearr2[2]){
									var temp = arr[j]
									arr[j] = arr[j+1]
									arr[j + 1] = temp
									
									var temp2 = arr2[j]
									arr2[j] = arr2[j+1]
									arr2[j + 1] = temp2
								}
							} 
							else if(timearr1[1] > timearr2[1]){
								var temp = arr[j]
								arr[j] = arr[j+1]
								arr[j + 1] = temp
								
								var temp2 = arr2[j]
								arr2[j] = arr2[j+1]
								arr2[j + 1] = temp2
							}
						} 
						else if(timearr1[0] > timearr2[0]){
							var temp = arr[j]
							arr[j] = arr[j+1]
							arr[j + 1] = temp
							
							var temp2 = arr2[j]
							arr2[j] = arr2[j+1]
							arr2[j + 1] = temp2
						}
					} 
					else if(datearr1[2] > datearr2[2]){
						var temp = arr[j]
						arr[j] = arr[j+1]
						arr[j + 1] = temp
						
						var temp2 = arr2[j]
						arr2[j] = arr2[j+1]
						arr2[j + 1] = temp2
					} 
				} 
				else if(datearr1[1] > datearr2[1]){
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j + 1] = temp
				
				var temp2 = arr2[j]
				arr2[j] = arr2[j+1]
				arr2[j + 1] = temp2
				} 
			}
			else if(datearr1[0] > datearr2[0]){
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

		  let datearr1 = currentdatearr(arr[j])
		  let datearr2 = currentdatearr(arr[j+1])
		  let timearr1 = currenttimearr(arr[j])
		  let timearr2 = currenttimearr(arr[j+1])

		  if (datearr1[0] == datearr2[0]) {
			  if (datearr1[1] == datearr2[1]) {
				  if (datearr1[2] == datearr2[2]) {
					  if (timearr1[0] == timearr2[0]) {
						  if (timearr1[1] == timearr2[1]) {
							  if (timearr1[2] == timearr2[2]) {
					  
							  } 
							  else if(timearr1[2] > timearr2[2]){
								  var temp = arr[j]
								  arr[j] = arr[j+1]
								  arr[j + 1] = temp
								  
								  var temp2 = arr2[j]
								  arr2[j] = arr2[j+1]
								  arr2[j + 1] = temp2
							  }
						  } 
						  else if(timearr1[1] > timearr2[1]){
							  var temp = arr[j]
							  arr[j] = arr[j+1]
							  arr[j + 1] = temp
							  
							  var temp2 = arr2[j]
							  arr2[j] = arr2[j+1]
							  arr2[j + 1] = temp2
						  }
					  } 
					  else if(timearr1[0] > timearr2[0]){
						  var temp = arr[j]
						  arr[j] = arr[j+1]
						  arr[j + 1] = temp
						  
						  var temp2 = arr2[j]
						  arr2[j] = arr2[j+1]
						  arr2[j + 1] = temp2
					  }
				  } 
				  else if(datearr1[2] > datearr2[2]){
					  var temp = arr[j]
					  arr[j] = arr[j+1]
					  arr[j + 1] = temp
					  
					  var temp2 = arr2[j]
					  arr2[j] = arr2[j+1]
					  arr2[j + 1] = temp2
				  } 
			  } 
			  else if(datearr1[1] > datearr2[1]){
			  var temp = arr[j]
			  arr[j] = arr[j+1]
			  arr[j + 1] = temp
			  
			  var temp2 = arr2[j]
			  arr2[j] = arr2[j+1]
			  arr2[j + 1] = temp2
			  } 
		  }
		  else if(datearr1[0] > datearr2[0]){
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