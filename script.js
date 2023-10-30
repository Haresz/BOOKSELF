const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");

// Inisialisasi variabel
let currentSlide = 0;

// Fungsi untuk berpindah ke slide berikutnya
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Set slide saat ini sebagai slide aktif
  slides[currentSlide].classList.add("active");
  slides[currentSlide - 1].classList.remove("active");
}

// Menambahkan event listener untuk tombol next
const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", nextSlide);

// Menambahkan event listener untuk tombol prev
const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // Set slide saat ini sebagai slide aktif
  slides[currentSlide].classList.add("active");
  slides[currentSlide + 1].classList.remove("active");
});

// Menjalankan fungsi nextSlide secara otomatis
setInterval(nextSlide, 5000);
