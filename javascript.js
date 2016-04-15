

///with document.ready height and width are set to zero///getting some weird answers 

//by the document.ready event is fired.... the img is not laded...
////thats why it reads the height and width as zero


$(document).ready(function (){
	///get the div1
	//// and set the html of the div...
	$("#div1").html("Height :" + $('#Image1').height() + "<br/>" + "Width: " + $('#Image1').width())
});

