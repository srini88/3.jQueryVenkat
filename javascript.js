
//////documennt object and then we call ready function
//// ready function ensures dom is fully loaded 
///anonymous function

///# in Jquery is id selector 

jQuery(document).ready(function(){
	jQuery('#button1').click(function(){
		console.log("Srinivas loaded jQuery");
	});
});


// Expose jQuery to the global object
// window.jQuery = window.$ = jQuery;
// So yes, it's the same. But you have two accesses, so that you avoid conflicts.

console.log(jQuery  === $);  //true
console.log(jQuery  === window.jQuery);  //true