// $('td') - select all the td elements 

// $('div a'); - div is ancestor - anchor is descendent - give us all anchor elemnts that are inside a div element 


// $('div, span, a'); //return all div span and anchor elents 



//jquery class selectors - getElemtnByClas s behind scenes 




$('.class')


$('.small') //select all ements with class small 
$('.small, .big') //all ements with class small or big
$('div.small, .big')  //all div elemtns with class small and any element with class big




$(document).ready(function(){

	$("div.small, .big").css({
		backgroundColor: 'red'
	});

});