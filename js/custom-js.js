// JavaScript Document
$(document).ready(function () {
    $('#collapseExample').on('hidden.bs.collapse', function () {
      $('#read-more').html('Read More &#9660;');
    });
    $('#collapseExample').on('shown.bs.collapse', function () {
      $('#read-more').html('Read Less &#9650;');
    });

	
	$('body').scrollspy({ target: '#navbar-primary' })
	
	
	$("#navbar-primary ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
	
	//iframe script
	
	
	
	//modal window alignment
	
	function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        /* Applying the top margin on modal dialog to align it vertically center */
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });  
	
	
});

// Back To Top //
var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});// Back To Top End//


// Owl owlCarousel
$(document).ready(function() {
  $('#owl-box1').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    responsiveClass: true,
      responsive:{
          0:{
              items:1,
              nav:true,
              loop:true
          },
          600:{
              items:1,
              nav:true,
              loop:true
          },
          1000:{
              items:1,
              nav:true,
              loop:true
          }
      }
  })
});
$(document).ready(function() {
  $('#owl-box2').owlCarousel({
    loop: true,
    // margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    responsiveClass: true,
      responsive:{
          0:{
              items:1,
              nav:true,
              loop:true
          },
          600:{
              items:1,
              nav:false,
              loop:true
          },
          1000:{
              items:2,
              nav:true,
              loop:true
          }
      }
  })
});
$(document).ready(function() {
  $('#owl-box3').owlCarousel({
    loop: true,
    // margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    responsiveClass: true,
      responsive:{
          0:{
              items:1,
              // nav:true,
              loop:true
          },
          600:{
              items:2,
              // nav:false,
              loop:true
          },
          1000:{
              items:4,
              // nav:true,
              loop:true
          }
      }
  })
});

// Testimonial Image Carousels
$(document).ready(function() {
  // Initialize testimonial image carousels only if not already initialized
  function initTestimonialCarousel(carouselId) {
    var $carousel = $(carouselId);
    if ($carousel.length && !$carousel.hasClass('owl-loaded')) {
      $carousel.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
      
      // Handle fade effect on slide change
      $carousel.on('changed.owl.carousel', function(event) {
        var $items = $(this).find('.owl-item');
        $items.removeClass('active');
        $items.eq(event.item.index).addClass('active');
      });
      
      // Set initial active item
      $carousel.find('.owl-item').first().addClass('active');
    }
  }

  // Initialize all carousels on page load
  initTestimonialCarousel('#testimonial-images-1');
  initTestimonialCarousel('#testimonial-images-2');
  initTestimonialCarousel('#testimonial-images-3');

  // Initialize carousel when Bootstrap carousel slide becomes active
  $('#carouselTestimonialIndicators').on('slid.bs.carousel', function(e) {
    var activeIndex = $(e.relatedTarget).index();
    var carouselId = '#testimonial-images-' + (activeIndex + 1);
    setTimeout(function() {
      initTestimonialCarousel(carouselId);
    }, 300);
  });
});