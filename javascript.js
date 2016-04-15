// $('td') - select all the td elements 

// $('div a'); - div is ancestor - anchor is descendent - give us all anchor elemnts that are inside a div element 


// $('div, span, a'); //return all div span and anchor elents 




$(document).ready(function(){


///now background color of one table 
//combine id and element select

///1st one ID right , got to use # ...remember 
$("#table1 tr:even").css({
	backgroundColor: 'blue'
});

});