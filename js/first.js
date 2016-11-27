$( document ).ready(function() {
	$('.carousel').carousel({
    interval: 4000,
    });

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $(document).on('click', '[data-toggle="lightbox"]',             function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});


