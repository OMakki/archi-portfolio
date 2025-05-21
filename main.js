$(function () {
  // スライドショー
  let currentIndex = 0;
  let $slides = $('.slider_item');
  let totalSlides = $slides.length;

  function slideNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    let newPosition = -currentIndex * 100 + '%';
    $('.slider_parent').css('transform', 'translateX(' + newPosition + ')');
    if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        $('.slider_parent').css('transition', 'none').css('transform', 'translateX(0)');
        currentIndex = 0;
        setTimeout(() => {
          $(".slider_parent").css('transition', 'transform 2s ease-in-out');
        }, 50);
      }, 2000);
    }
  }

  setInterval(slideNext, 4000);
});
