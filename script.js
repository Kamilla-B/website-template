//var currentIndex = 0;
//function moveCarousel(direction){
//    const carouselInner = document.querySelector('.carousel-inner');
//    const totalItems = document.querySelectorAll('.carousel-item').length;
//    currentIndex = (currentIndex + direction + totalItems) % totalItems;
//    const newTransformValue = -currentIndex * 100;
//    carouselInner.style.transform = `translateX(${newTransformValue}%)`;
//} 


let currentPosition = 0; 
const carouselTrack = document.querySelector('.carousel-track');
const itemWidth = carouselTrack.children[0].offsetWidth; // Width of the track

function moveCarousel(direction) {
  currentPosition += direction; 
  if (currentPosition < 0) {
    currentPosition = carouselTrack.children.length - 1; 
  } else if (currentPosition > carouselTrack.children.length - 1) {
    currentPosition = 0; 
  }

const newTranslation = -currentPosition * itemWidth;

carouselTrack.style.transform = `translateX(${newTranslation}px)`;
}

