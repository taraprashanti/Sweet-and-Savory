document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll('.recomendedbyuscarousel');

  carousels.forEach(carousel => {
    const menuContainer = carousel.querySelector('.menucontainer-container');
    const menuContainerHeight = menuContainer.offsetHeight;
    const menuItems = carousel.querySelectorAll('.menucontainer');
    const menuContainerWidth = menuContainer.offsetWidth;

    // Clone the first set of menu items and append them to the end
    menuItems.forEach(item => {
      const clone = item.cloneNode(true);
      menuContainer.appendChild(clone);
    });

    let currentPositionX = 0;
    let currentPositionY = 0;
    const scrollSpeed = 0.5; // Adjust scrolling speed if needed

    function scroll() {
      currentPositionX += scrollSpeed;
      currentPositionY += scrollSpeed;
      if (currentPositionX > menuContainerWidth) {
        currentPositionX = 0;
      }
      if (currentPositionY > menuContainerHeight) {
        currentPositionY = 0;
      }
      menuContainer.scrollTo(currentPositionX, currentPositionY);
    }

    // Set the scroll interval
    const scrollInterval = setInterval(scroll, 15); // Adjust interval if needed
  });
});
