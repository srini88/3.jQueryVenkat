/////ready probalby the most used 

///to get the actual image dimensitons, we will have to wait till the image is fully loaded....
///so use window.load 



// $(window).load  -- in jquery 
// window.onload in traditional JS
////you want to get actual image height and width, have to wait until the image is fully loaded 
///you got a funking div 


$(window).load(function (){
	///get the div1
	//// and set the html of the div...
	$("#div1").html("Height :" + $('#Image1').height() + "<br/>" + "Width: " + $('#Image1').width())
});


// The html() method sets or returns the content (innerHTML) of the selected elements.

// When this method is used to return content, it returns the content of the FIRST matched element.

// When this method is used to set content, it overwrites the content of ALL matched elements.

// Return content:

// $(selector).html()
// Set content:

// $(selector).html(content)