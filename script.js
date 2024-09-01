//var currentIndex = 0;
//function moveCarousel(direction){
//    const carouselInner = document.querySelector('.carousel-inner');
//    const totalItems = document.querySelectorAll('.carousel-item').length;
//    currentIndex = (currentIndex + direction + totalItems) % totalItems;
//    const newTransformValue = -currentIndex * 100;
//    carouselInner.style.transform = `translateX(${newTransformValue}%)`;
//} 


document.addEventListener('DOMContentLoaded', () => {
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselItems = Array.from(carouselTrack.children);
  const visibleItemsCount = 5; // Number of items to show at a time

  // Function to get the width of an element including its margins
  function getElementWidthIncludingMargins(element) {
    const width = element.offsetWidth;
    const style = window.getComputedStyle(element);
    const marginLeft = parseFloat(style.marginLeft);
    const marginRight = parseFloat(style.marginRight);
    return width + marginLeft + marginRight;
  }

  // Calculate the width of one item including margins
  const itemWidthIncludingMargins = getElementWidthIncludingMargins(carouselItems[0]);
  const totalItems = carouselItems.length;

  // Set the track width to accommodate all items
  carouselTrack.style.width = `${itemWidthIncludingMargins * totalItems}px`;

  let currentPosition = 0;

  // Function to move the carousel by one image
  function moveCarousel(direction) {
    // Update position by 1 (either forward or backward)
    currentPosition += direction;

    // Ensure the position is within bounds
    if (currentPosition < 0) {
      currentPosition = totalItems - visibleItemsCount;
    } else if (currentPosition > totalItems - visibleItemsCount) {
      currentPosition = 0;
    }

    const newTranslation = -currentPosition * itemWidthIncludingMargins;
    carouselTrack.style.transform = `translateX(${newTranslation}px)`;
  }

  // Event listeners for buttons
  document.querySelector('.carousel-button.next').addEventListener('click', () => {
    moveCarousel(1);
  });

  document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    moveCarousel(-1);
  });
});

