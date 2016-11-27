$( document ).ready(function() {
	
    $('.carousel').carousel({
	    interval: 4000,
	});
    
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    	event.preventDefault();
    	$(this).ekkoLightbox();
	});
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

});
