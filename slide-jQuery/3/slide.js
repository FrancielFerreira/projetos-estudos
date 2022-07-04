function slider(speed) {
  const allSlides = $("[data-slide-item]"),
        firstSlide = $("[data-slide-item]").first(),
        lastSlide = $("[data-slide-item]").last();
  let speedSlide = setInterval(playSlide, speed);

  allSlides.attr("data-slide-item", "hide");
  firstSlide.attr("data-slide-item", "show");

  function prevSlide(slideActive) {
    let prevSlide = slideActive.prev();
    prevSlide.length === 0 ? prevSlide = lastSlide : 0;
    slideActive.attr("data-slide-item", "hide");
    prevSlide.attr("data-slide-item", "show");
    clearInterval(speedSlide);
    speedSlide = setInterval(playSlide, speed);
  }

  function nextSlide(slideActive) {
    let nextSlide = slideActive.next();
    nextSlide.length === 0 ? nextSlide = firstSlide : 0;
    slideActive.attr("data-slide-item", "hide");
    nextSlide.attr("data-slide-item", "show");
    clearInterval(speedSlide);
    speedSlide = setInterval(playSlide, speed);
  }

  function playSlide() {
    const btnClick = $(this).attr("class");
    let slideActive = $('[data-slide-item="show"]');
    btnClick === "btn-prev" ? prevSlide(slideActive) : nextSlide(slideActive);
  }

  $(".btn-prev").click(playSlide);
  $(".btn-next").click(playSlide);
}
slider(5000)