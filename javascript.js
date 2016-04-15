///id selector 

//jqeury selectors

///alllow you to select and manipulate HTML elements

////elemt ID 

///e;emtn tag name

//element class name
//element attribute
///element attribute values and many more 



// # symbol witin jquery is the ID selector 

// you are attaching clcik event handler to the button that is returned. 



// ///change the background clor of the method

// ///use the method css  - that has name and value 

// <input type="button" id="btn" value="clickme"></input>


////no dot after jqeury or $

jQuery(document).ready(function(){


	$("#btn").click(function (){
		
		console.log("you clicked...jquery is working fine");
	});

});

