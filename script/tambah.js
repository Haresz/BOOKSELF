import { Popup } from "./popup.js";
const submit = document.getElementById("submit");
const coverBuku = document.getElementById("cover-buku");

function generateId() {
  return +new Date();
}

let dataURL;

coverBuku.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    dataURL = reader.result;
    console.log(dataURL);
  });

  reader.readAsDataURL(file);
});

function add() {
  const judulBuku = document.getElementById("judul-buku").value;
  const pengarangBuku = document.getElementById("pengarang-buku").value;
  const tahunBuku = document.getElementById("tahun-buku").value;
  const deskripsiBuku = document.getElementById("deskripsi-buku").value;
  const generateID = generateId();

  const todoObject = {
    id: generateID,
    title: judulBuku,
    author: pengarangBuku,
    cover: dataURL,
    tahun: Number(tahunBuku),
    deskripsi: deskripsiBuku,
    isComplete: false,
    isRecomended: false,
  };

  console.log("add", dataURL);

  const dataStorage = localStorage.getItem("data");
  const data = JSON.parse(dataStorage);

  console.log(todoObject);

  data.push(todoObject);

  localStorage.setItem("data", JSON.stringify(data));
}

submit.addEventListener("click", (e) => {
  Popup("YAKIN INGIN NAMBAHIN INI ?", (result) => {
    if (result == "IYA") {
      add(e.target);
      window.location = "./index.html";
    }
  });
});
