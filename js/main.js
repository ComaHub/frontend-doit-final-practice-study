const slideImgs = document.querySelectorAll("#slides > img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;

function showSlides(n) {
  for (let i = 0; i < slideImgs.length; i++) {
    slideImgs[i].style.display = "none";
  }

  slideImgs[n].style.display = "block";
}

function prevSlide() {
  if (current > 0) {
    current--;
  } else {
    current = slideImgs.length - 1;
  }

  showSlides(current);
}

function nextSlide() {
  if (current < slideImgs.length - 1) {
    current++;
  } else {
    current = 0;
  }

  showSlides(current);
}

showSlides(current);
prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

