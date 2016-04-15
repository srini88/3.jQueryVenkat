// $('td') - select all the td elements 

// $('div a'); - div is ancestor - anchor is descendent - give us all anchor elemnts that are inside a div element 


// $('div, span, a'); //return all div span and anchor elents 




$(document).ready(function(){


	//3 divs in the godammn page , change the color of divs to red

	$('div').css({
		backgroundColor: 'yellow',
		fontSize: '100px'
	});
	///put all the below shit in a collection and return that shit
	$('span,a, div').css({
		backgroundColor: 'red'
	});


	//ancestor descendent 
	//give all anchor that are under div 

	//$("div a")

});