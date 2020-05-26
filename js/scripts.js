$(document).ready(function() {

    var slides = $('.slider__items').lightSlider({
        item:1,
        slideMove:1,
        slideMargin: 0,
        auto: true,
        speed: 700,
        pause: 3000,
        loop: false,
        pager:false,
        controls:false
    });

    function toggleSlide(posSlide, newPosSlide) {
      if (posSlide) {
        for (var i = 0; i < posSlide[0].classList.length; i++) {
          if (posSlide[0].classList[i] === 'active') {
            slides.goToSlide(newPosSlide);
          }
        }
      } else {
        return false;
      }
    }

    $('.slider__next').click(function(event) {

        var lastSlide = $('.slider__item:last-child');

        toggleSlide(lastSlide, -1);
        slides.goToNextSlide();

        return false;
    });

    $('.slider__prev').click(function(event) {
        var collectionSlides = $('.slider__item');
        var firstSlide = $('.slider__item:first-child');
        
        toggleSlide(firstSlide, collectionSlides.length);
        slides.goToPrevSlide();
        return false;
    });

    $('.tab__item').click(function(event) {
        if(!$(this).is('.active')) {
            $('.tab__item, .tab-content').removeClass('active');
            $(this).addClass('active');
            $('.tab-content'+$(this).attr('href')).addClass('active');
        }
        return false;
    });

});
