// AMBIL DATA
const dataStorage = localStorage.getItem("data");
const ID = localStorage.getItem("ID");
const convert = JSON.parse(dataStorage);
const data = convert[ID];

// GET HTML
const coverBuku = document.getElementById("cover-detail");
const judulBuku = document.getElementById("judul-detail");
const pengarangBuku = document.getElementById("pengarang-detail");
const deskripsiBuku = document.getElementById("deskripsi-detail");

// MENAMPILKAN DATA

coverBuku.setAttribute("src", data.cover);
judulBuku.innerHTML = data.judul;
pengarangBuku.innerHTML = data.penulis;
deskripsiBuku.innerHTML = data.deskripsi;
