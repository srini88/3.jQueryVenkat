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

	$("#btn").css({
		"backgroundColor": 'red',
		"font-size": "200%"
		
	});
});


// Set Multiple CSS Properties
// To set multiple CSS properties, use the following syntax:

// css({"propertyname":"value","propertyname":"value",...});


// To return the value of a specified CSS property, use the following syntax:

// css("propertyname");
// The following example will return the background-color value of the FIRST matched element:

// Example
// $("p").css("background-color");