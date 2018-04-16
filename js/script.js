jQuery(document).ready(function($) {


    /*if(!$.os.mobile) {
		$('#gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,2] // Will preload 0 - before current, and 2 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return '<a target="_blank" href="'+item.el.attr('link') + '" download>Download</a><small>Foto: © </small>';
				}
			}
		});
	}*/

    //slimscroll
    /*if($('.slimscroll').length){
        $('.slimscroll').slimScroll({
            height: '400px',
            color: '#ff0',
            alwaysVisible: true,
            opacity: false,
            railVisible: true,
            railColor: '#ff0',
            railOpacity: 0.2,
            allowPageScroll:true,
        });
    }*/


   /* $(".owl-carousel").owlCarousel({

        items: 1,
        merge:true,
        center: true,
        loop: true,
        autoplay: true,
        video:true,
        lazyLoad:true,
        dots: false,
        nav: true,
        animateOut: 'fadeOut',
        navText: [
            '<i class="fa fa-angle-left fa-5x" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right fa-5x" aria-hidden="true"></i>'
        ],

    });*/


    /*$('a').smoothScroll({
        speed: 'auto',     //speed can be a number or 'auto'
        autoCoefficient: 3,    //Only used when speed set to 'auto'
        offset: 0,    //z.b. für navbars. hierbei negative werte verwenden, wie z.b. "-60"
    });*/

});

$(window).resize(function() {

});

$(window).load(function() {
    FastClick.attach(document.body);
});