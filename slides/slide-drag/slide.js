const $slides = $('[data-slide-item]')
console.log($slides)
$('.btn-next').click(function() {
  $slides.css('marginLeft', '-100%');
})