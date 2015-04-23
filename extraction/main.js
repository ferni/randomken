$(function() {
	var links = $( "a" )
	  .map(function() {
	    return $(this).attr('href').split('=')[1];
	  })
	  .get()
	  .join();


	  console.log('links: ' + links);
})