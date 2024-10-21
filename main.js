//Get Slider Items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number OF Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// slide Number Element
var slideNumberElemnet = document.getElementById("slide-number");

// Previous and Next Buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle Click On Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Manin UL Element
var paginationElement = document.createElement("ul");

// Set ID On Created UL Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
  var paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));

  paginationElement.appendChild(paginationItem);
}

// Add The Created UL Element To The Page
document.getElementById("indicators").appendChild(paginationElement);

//Get The New Created UL
var paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination Items
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// Previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  //Set The Slide Number
  slideNumberElemnet.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;
  // Remove All Active Classes
  removeAllActive();
  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");
  //Set Active Class On current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Add Disabled Class On Previous Button
  if (currentSlide == 1) {
    // Add Disabled Class On Previous Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class On Previous Button
    prevButton.classList.remove("disabled");
  }

  // Add Disabled Class On Next Button
  if (currentSlide == slidesCount) {
    // Add Disabled Class On Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class On Next Button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Class From images and Pagination Bullets
function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  // Loop Through pagination Bullets
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
