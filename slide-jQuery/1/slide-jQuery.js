function slider(sliderName, velocidade) {
  let sliderClass = "." + sliderName,
    activeClass = "active",
    rotate = setInterval(rorateSlide, velocidade);

  $(sliderClass + "> :first").addClass(activeClass);

  $(sliderClass).hover( // pause on hover
    function () {
      clearInterval(rotate);
    },
    function () {
      rotate = setInterval(rorateSlide, velocidade);
    }
  );

  function rorateSlide() {
    let activeSlide = $(sliderClass + "> ." + activeClass),
      nextSlide = activeSlide.next();

    if (nextSlide.length === 0) {
      nextSlide = $(sliderClass + "> :first");
    }
    activeSlide.removeClass(activeClass);
    nextSlide.addClass(activeClass);
  }
}

slider("introducao", 2000);
