const slideList = $('.slide').addClass('active');
const firstSlide = $('.slide > :first')
$('[data-slide]').attr('data-slide', 'hide')
firstSlide.attr('data-slide', 'show')
function startSlide() {
  let slideActive = $('[data-slide="show"]'),
      nextSlide = slideActive.next();

  if(nextSlide.length == 0) {
    nextSlide = firstSlide
  }
  slideActive.attr('data-slide', 'hide')
  // nextSlide.attr('data-slide', 'show')
}

setInterval(startSlide, 3000);








