///window loaded 


$(window).load(function (){
	console.log("window loaded")
});


////ready fires before window.load 
$(document).ready(function (){
	console.log("documnet DOM loaded")
});


//op

// documnet DOM loaded  - this prints first 
// window loaded


