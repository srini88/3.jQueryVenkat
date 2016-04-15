window.onload = function(){   ///when onload event fires execute thsi function
	///to that button add event listener

	///// this is other way of taking care of event handling remember,,, instead of putting on click or some shit in DOM itself, you adding event in teh JS 
	document.getElementById("button1").addEventListener("click", clickHnlr);

	function clickHnlr(){
		console.log("Button1 been clicked");
	}



}