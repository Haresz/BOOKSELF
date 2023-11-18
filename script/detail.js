import { Popup } from "./popup.js";
// AMBIL DATA
const dataStorage = localStorage.getItem("data");
const ID = localStorage.getItem("ID");
const convert = JSON.parse(dataStorage);
const data = convert[ID];

// GET HTML
const judulBuku = document.getElementById("judul-detail");
const pengarangBuku = document.getElementById("pengarang-detail");
const tahunBuku = document.getElementById("tahun-detail");

// MENAMPILKAN DATA
judulBuku.innerHTML = data.title;
pengarangBuku.innerHTML = data.author;
tahunBuku.innerHTML = data.year;
