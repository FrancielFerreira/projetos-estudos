const allSlides = $("[data-slide-item]");
const firstSlide = $("[data-slide-item]").first();
const lastSlide = $("[data-slide-item]").last();

allSlides.attr("data-slide-item", "hide");
firstSlide.attr("data-slide-item", "show");

function prevSlide(slideActive) {
  let prevSlide = slideActive.prev();
  prevSlide.length === 0 ? prevSlide = lastSlide : 0;
  slideActive.attr("data-slide-item", "hide");
  prevSlide.attr("data-slide-item", "show");
}

function nextSlide(slideActive) {
  let nextSlide = slideActive.next();
  nextSlide.length === 0 ? nextSlide = firstSlide : 0;
  slideActive.attr("data-slide-item", "hide");
  nextSlide.attr("data-slide-item", "show");
}

function playSlide() {
  const btnPrevSlide = $(this).attr("class");
  let slideActive = $('[data-slide-item="show"]');
  btnPrevSlide === "btn-prev" ? prevSlide(slideActive) : nextSlide(slideActive);
}

$(".btn-prev").click(playSlide);
$(".btn-next").click(playSlide);
setInterval(playSlide, 2000);


/* backup slide
const slideList = $("[data-slide-list]");
const allSlides = $("[data-slide-item]");
const firstSlide = $("[data-slide-item]").first();
const lastSlide = $("[data-slide-item]").last();

allSlides.attr("data-slide-item", "hide");
firstSlide.attr("data-slide-item", "show");

function playSlide() {
  const btnPrevSlide = $(this).attr("class");
  let slideActive = $('[data-slide-item="show"]');

  if (btnPrevSlide === "btn-prev") {
    let prevSlide = slideActive.prev();
    if (prevSlide.length === 0) {
      prevSlide = lastSlide;
    }
    slideActive.attr("data-slide-item", "hide");
    prevSlide.attr("data-slide-item", "show");
  } else {
    let nextSlide = slideActive.next();
    if (nextSlide.length === 0) {
      nextSlide = firstSlide;
    }
    slideActive.attr("data-slide-item", "hide");
    nextSlide.attr("data-slide-item", "show");
  }
}

$(".btn-prev").click(playSlide);
$(".btn-next").click(playSlide);
setInterval(playSlide, 2000);

*/