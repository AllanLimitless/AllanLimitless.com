/*--------------------------------------------------------------
  TABLE OF CONTENTS:
----------------------------------------------------------------
1.	Preloader - Loading animation
2.  Menu Scroll - Animation One page Nav
	Menu Scroll - Smooth Scroll
	Scroll - On clicl check Scroll Class and scroll to section
	Mobile - Menu button 
3.  Parallax - VScroll.js
4.  Portfolio Filter - QuickSand
5.  Project Counters
6.	Testimonial Slider - Slick.js
7.  Contact form - AJAX
-------------------------------------------------------------------*/


(function($) {

	// Use strict start
    "use strict";


    // Selectors 
    var $window = $(window),
	    $current_class = $('ul.nav'),
	    $one_page_nav = $('ul.nav a'),
	    $scroll = $('.scroll'),
	    $navbar_toggle = $('.navbar-toggle'),
	    $counter = $('.counter'),
	    $testimonial_slider = $('.testimonial_slider');


   /*--------------------------------------------------------------
    1.  Preloader - Loading animation
    --------------------------------------------------------------*/
	$window.on('load', function() { // makes sure the whole site is loaded
		$('#Status').fadeOut(); // will first fade out the loading animation 
		$('#Preloader').delay(350).fadeOut(); // will fade out the white DIV that covers the website. 
		$('body').delay(350).css({'overflow':'visible'});
	})


   /*--------------------------------------------------------------
    2.  Menu Scroll - Add Current Class to active section
    --------------------------------------------------------------*/
	$current_class.onePageNav({ currentClass: 'current'});

   /*--------------------------------------------------------------
    #  Menu Scroll - Smooth Scroll - One Page Navigation
    --------------------------------------------------------------*/
	$one_page_nav.on('click', function(e) {
		e.preventDefault();
		var link = this;
		$.smoothScroll({
			speed: 600,
			offset: -68,
			scrollTarget: link.hash
		});
	});

   /*--------------------------------------------------------------
    #  Section Scroll - Check "scroll" Class, scroll to section assigned
    --------------------------------------------------------------*/
	$scroll.on('click', function(e) {
		e.preventDefault();
		var link = this;
		$.smoothScroll({
			speed: 600,
			offset: -68,
			scrollTarget: link.hash
		});
	});

   /*--------------------------------------------------------------
    #  Mobile Menu button 
    --------------------------------------------------------------*/
	$navbar_toggle.on('click', function(e) {
		$(this).toggleClass('menu_active');
	});
	


   /*--------------------------------------------------------------
    3.  Parallax - paroller.js
    --------------------------------------------------------------*/
    $('.cover').paroller();
    $('.counter_box').paroller();
    $('.testimonial_box').paroller();

   /*--------------------------------------------------------------
    6.  Testimonial Slider - Slick.js
    --------------------------------------------------------------*/
    $testimonial_slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        prevArrow: '<div class="slick-prev slick-nav-btn"><i class="fa fa-angle-left fa-2x"></i></div>',
        nextArrow: '<div class="slick-next slick-nav-btn"><i class="fa fa-angle-right fa-2x"></i></div>',
        // Responsive Breakpoints for Mobile & Tablets
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
		});
		
   /*--------------------------------------------------------------
    7.  Contact form - AJAX
    --------------------------------------------------------------*/
	// Assigned form
	var form = $('#ajax-contact');

	// Messages div
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});


})(jQuery); // Use strict end