const testimonials = document.querySelectorAll('.testimonials-list li');
console.log(testimonials);
let count = 0;
testimonials[0].classList.add('ativo');

function trocaTestimonials() {
  testimonials[count].classList.remove('ativo');
  count++;
  count >= testimonials.length ? count = 0 : count
  testimonials[count].classList.add('ativo');
}

function playTestimonials() {setInterval(() => trocaTestimonials(), 5000)}

window.addEventListener('load', playTestimonials);