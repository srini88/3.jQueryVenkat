// $('td') - select all the td elements 

// $('div a'); - div is ancestor - anchor is descendent - give us all anchor elemnts that are inside a div element 


// $('div, span, a'); //return all div span and anchor elents 




$(document).ready(function(){

	// <tr>
 //            <td>C#</td>
 //            <td>ASP.NET</td>
 //            <td>SQL Server</td>
 //        </tr>

    $('tr td').html("nigga");   //picks all trs and tds within that tr

    console.log($('tr td'));   //gives all the 15 td elements 

    console.log($('tr td').length);  //find all td elemtns  - length = 15


    ///chnage the background of each of tr to red

    $('tr').css({
    	'backgroundColor': 'red'
    });
      //////changed


    console.log($('table').html());   //entire html content of table elemnt 


    //lets alert each table row 
    //loop through each tr element
   
    // 	//this references the current tr element, we want to get html of the current table row -
    
    $("table tr").each(function (){
    	alert($(this).html());
    });
    	

});