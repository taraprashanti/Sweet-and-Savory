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


const allitemsButton = document.getElementById('allitems');
const pastaButton = document.getElementById('Pasta');
const snacksButton = document.getElementById('Snacks');
const desertsButton = document.getElementById('Deserts');
const beveragesButton = document.getElementById('Beverages');
const itemList = document.getElementById('item-list');

allitemsButton.addEventListener('click', () => {
  itemList.querySelectorAll('.item').forEach(item => {
    item.style.display = 'block';
  });
});

pastaButton.addEventListener('click', () => {
  itemList.querySelectorAll('.item').forEach(item => {
    if (item.dataset.category === 'Pasta') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

snacksButton.addEventListener('click', () => {
  itemList.querySelectorAll('.item').forEach(item => {
    if (item.dataset.category === 'Snacks') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

desertsButton.addEventListener('click', () => {
  itemList.querySelectorAll('.item').forEach(item => {
    if (item.dataset.category === 'Deserts') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

beveragesButton.addEventListener('click', () => {
  itemList.querySelectorAll('.item').forEach(item => {
    if (item.dataset.category === 'Beverages') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
