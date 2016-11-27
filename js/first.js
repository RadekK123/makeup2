$( document ).ready(function() {
	/*$('.carousel').carousel({
	    interval: 4000,
	});*/

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    	event.preventDefault();
    	$(this).ekkoLightbox();
	});

});
