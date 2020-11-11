// The hamburger button animation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});


/* ###########  For the image carousel ########### */

const current = document.querySelector('#current');
// select all sub images
const imgs = document.querySelectorAll('.sub-imgs img');
const imgOpacity = 0.6;

// set the first image opacity directly
imgs[0].style.opacity = imgOpacity;

// Using Event delegation to select an image
document.querySelector('.sub-imgs').addEventListener('click', imgClick);

// // Loop through the nodeList and reach out each image, method 1
// imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset the opacity of all the images
  imgs.forEach((img) => (img.style.opacity = 1));

  // Change current image to source of clicked image
  changeImageTo(e.target);
}

function changeImageTo(image) {
  imgs.forEach((img) => (img.style.opacity = 1));

  if (image.tagName === 'IMG') {
    current.src = image.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in after 0.5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the current image opacity
    image.style.opacity = imgOpacity;
  }
}

// Adding buttons for image change

// Selections
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

// Event listener
leftButton.addEventListener('click', leftScroll);
rightButton.addEventListener('click', rightScroll);

// functions

function leftScroll() {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].src === current.src) {
      currIndex = i - 1;
      if (currIndex < 0) {
        currIndex += imgs.length;
      }
      changeImageTo(imgs[currIndex]);
      break;
    }
  }
}

function rightScroll() {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].src === current.src) {
      currIndex = i + 1;
      if (currIndex > imgs.length - 1) {
        currIndex -= imgs.length;
      }
      changeImageTo(imgs[currIndex]);
      break;
    }
  }
}

// THANKS TO BRAD TRAVERSY AND DEV-ED, FOR GIVING THIS MUCH INSPIRATION.
// ALL WALLPAPERS FROM wallpaperflare.com
