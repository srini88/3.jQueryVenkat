// $('td') - select all the td elements 

// $('div a'); - div is ancestor - anchor is descendent - give us all anchor elemnts that are inside a div element 


// $('div, span, a'); //return all div span and anchor elents 




$(document).ready(function(){

 ////now chnage even rows to greay and odd rows to yellow  - in botht the godammn tables


// feth all the trs in both the tables - and change shit to grey

// (not what we wnated.. we wanted even odd shit)
 $('tr').css({
 	backgroundColor: 'gray'
 });

});