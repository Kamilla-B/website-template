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
const itemWidth = carouselTrack.children[0].offsetWidth; // Width of a single carousel item
const itemsToShow = 5; // Number of items to display at a time
const totalItems = carouselTrack.children.length;

function moveCarousel(direction) {
  // Update currentPosition based on direction
  currentPosition += direction;

  // Loop around if we go past the last item or before the first item
  if (currentPosition < 0) {
    currentPosition = totalItems - 1; // Move to the last item
  } else if (currentPosition >= totalItems) {
    currentPosition = 0; // Move to the first item
  }

  const newTranslation = -currentPosition * itemWidth;

  // Apply the new translation to move the carousel
  carouselTrack.style.transform = `translateX(${newTranslation}px)`;
}

// Example event listeners for buttons
document.querySelector('.carousel-button.prev').addEventListener('click', () => moveCarousel(-1));
document.querySelector('.carousel-button.next').addEventListener('click', () => moveCarousel(1));


