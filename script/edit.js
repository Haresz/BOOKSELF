import { Popup } from "./popup.js";
// AMBIL DATA
const dataStorage = localStorage.getItem("data");
const ID = localStorage.getItem("ID");
const convert = JSON.parse(dataStorage);
const data = convert[ID];

// GET VALUES
const judulBuku = document.getElementById("judul-buku");
const pengarangBuku = document.getElementById("pengarang-buku");
const tahunBuku = document.getElementById("tahun-buku");
const submit = document.getElementById("submit");

judulBuku.value = data.title;
pengarangBuku.value = data.author;
tahunBuku.value = data.year;

// KIRIM VALUES

function edit() {
  data.id = data.id;
  data.title = judulBuku.value;
  data.author = pengarangBuku.value;
  data.year = Number(tahunBuku.value);
  data.isComplete = data.isComplete;

  localStorage.setItem("data", JSON.stringify(convert));
}

submit.addEventListener("click", (e) => {
  Popup("APAKAH DATA SUDAH BENAR ?", (result) => {
    if (result == "IYA") {
      edit(e.target);
      window.location = "./index.html";
      localStorage.removeItem("ID");
    }
  });
});
