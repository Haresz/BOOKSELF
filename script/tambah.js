import { Popup } from "./popup.js";
const submit = document.getElementById("submit");

function generateId() {
  return +new Date();
}

function add() {
  const judulBuku = document.getElementById("judul-buku").value;
  const pengarangBuku = document.getElementById("pengarang-buku").value;
  const tahunBuku = document.getElementById("tahun-buku").value;
  const generateID = generateId();

  const todoObject = {
    id: generateID,
    title: judulBuku,
    author: pengarangBuku,
    year: Number(tahunBuku),
    isComplete: false,
  };

  const dataStorage = localStorage.getItem("data");
  if (dataStorage === null || dataStorage === undefined) {
    const setData = [];
    setData.push(todoObject);
    localStorage.setItem("data", JSON.stringify(setData));
  } else {
    const data = JSON.parse(dataStorage);
    data.push(todoObject);
    localStorage.setItem("data", JSON.stringify(data));
  }
}

submit.addEventListener("click", (e) => {
  Popup("YAKIN INGIN NAMBAHIN INI ?", (result) => {
    if (result == "IYA") {
      add(e.target);
      window.location = "./index.html";
    }
  });
});
