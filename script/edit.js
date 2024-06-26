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
const deskripsiBuku = document.getElementById("deskripsi-buku");
const coverBuku = document.getElementById("cover-buku");
const prevCover = document.getElementById("preview-cover");
const submit = document.getElementById("submit");
let dataURL;

judulBuku.value = data.title;
pengarangBuku.value = data.author;
tahunBuku.value = data.year;
deskripsiBuku.value = data.deskripsi;
prevCover.setAttribute("src", data.cover);
coverBuku.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    dataURL = reader.result;
    prevCover.setAttribute("src", dataURL);
  });

  reader.readAsDataURL(file);
});

if (dataURL === undefined || dataURL === null) {
  dataURL = data.cover;
}

// KIRIM VALUES

function edit() {
  data.id = data.id;
  data.title = judulBuku.value;
  data.author = pengarangBuku.value;
  data.cover = dataURL;
  data.year = Number(tahunBuku.value);
  data.deskripsi = deskripsiBuku.value;
  data.isComplete = data.isComplete;
  data.isRecomended = data.isRecomended;

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
