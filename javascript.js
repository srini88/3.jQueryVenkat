// $('td') - select all the td elements 

// $('div a'); - div is ancestor - anchor is descendent - give us all anchor elemnts that are inside a div element 


// $('div, span, a'); //return all div span and anchor elents 




$(document).ready(function(){

 ////now chnage even rows to greay and odd rows to yellow  - in botht the godammn tables


//just element
 $('tr:even').each(function (){
 	$(this).css({
 		backgroundColor: 'blue'
 	});
 });

});