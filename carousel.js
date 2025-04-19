const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn.right');
const prevBtn = document.querySelector('.carousel-btn.left');

let currentIndex = 0;
const visibleSlides = 3;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex + visibleSlides < slides.length) {
    currentIndex += visibleSlides;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex - visibleSlides >= 0) {
    currentIndex -= visibleSlides;
  } else {
    currentIndex = slides.length - visibleSlides;
  }
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
document.addEventListener('DOMContentLoaded', updateCarousel);