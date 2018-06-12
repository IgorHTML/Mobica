$(function() {

  // inp.mask

  $("#phone").mask("+7 (999) 999-99-99");

  // popup

  $('.popup').magnificPopup({
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
    },
    midClick: true,
    removalDelay: 500,
  });

  $('.magn_close').click(function(){
    //This will close popup dialog opened using $.magnificPopup.open()
    $.magnificPopup.close();
  });

  // Carousel

  $('.carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayHoverPause: true,
    nav: false,
    smartSpeed: 800,
  });
  
  // img not drag

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).on('load', function() {
  $('#holder').delay(1000).fadeOut(400);
});