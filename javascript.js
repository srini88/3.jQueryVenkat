// $('td') - select all the td elements 

// $('div a'); - div is ancestor - anchor is descendent - give us all anchor elemnts that are inside a div element 


// $('div, span, a'); //return all div span and anchor elents 



//jquery class selectors - getElemtnByClas s behind scenes 


//span elements with class big ... period because class 
$('span.big')  //tag names just use like that


$('.class')


$('.small') //select all ements with class small 
$('.small, .big') //all ements with class small or big
$('div.small, .big')  //all div elemtns with class small and any element with class big


//sleect all eleemtns with class small that are nested in an elemetn with id = div2

//ancestor and descendent syntax -- always have space 
$("#div2 .small")



$(document).ready(function(){

	$("div.small").css({
		border : '5px solid red'
	});
	// or   no difference -- border without quotations
	// $("div.small, .big").css({
	// 	'border' : '5px solid red'
	// });

});