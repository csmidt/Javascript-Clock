$(document).ready(function(){


	setInterval(function() {
		var time = new Date()
		var h = time.getHours()
		var m = time.getMinutes()
		var s = time.getSeconds()
		

		if (h > 12) {
			h = h - 12
		}

		if (h <= 9) {
			h = "0" + h
		}
		if (m <= 9) {
			m = "0" + m
		}
		if (s <= 9) {
			s = "0" + s
		}
		color ="#"+h+m+s

		document.body.style.background = color

		document.getElementById("clock").innerHTML = color

		var myclock = "#"+ h + m  + s
		
		$("#clock").html(myclock)	 
	
	},1000)

})
