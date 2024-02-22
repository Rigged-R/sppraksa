currentslidenum = 1;
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function currentSlide(n) {
  let image = document.getElementById("sliderimage");
  image.src = "img/slider" + n + ".png";
  document.getElementById(n).style.backgroundColor = "red";
  currentslidenum = n;
}

function prevSlide(n) {
  let image = document.getElementById("sliderimage");
  image.src = "img/slider" + (currentslidenum + n) + ".png";
}

function nextSlide(n) {
  let image = document.getElementById("sliderimage");
  image.src = "img/slider" + (currentslidenum + n) + ".png";
}

function showNav() {
  let navigation = document.getElementById("mobilenavigation");
  let navul = document.getElementById("navul");

  if (navigation.style.display == "none") {
    navigation.style.display = "block";
    navul.style.display = "block";
  } else {
    navigation.style.display = "none";
    navul.style.display = "none";
  }
}
