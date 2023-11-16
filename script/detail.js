import { Popup } from "./popup.js";
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
const containerBtn = document.getElementById("method-container-detail");

// MENAMPILKAN DATA
coverBuku.setAttribute("src", data.cover);
judulBuku.innerHTML = data.judul;
pengarangBuku.innerHTML = data.penulis;
deskripsiBuku.innerHTML = data.deskripsi;

// MENAMBAHKAN METHODS

// ADD
const buttonAdd = document.createElement("a");
buttonAdd.setAttribute("id", "method-detail");
buttonAdd.classList.add("button-method", "button-add");
buttonAdd.addEventListener("click", (e) => {
  Popup("YAKIN INGIN NAMBAHIN INI ?", (result) => {
    if (result == "IYA") {
      location.reload(true);
      data[i].isRecomended = false;
      localStorage.setItem("data", JSON.stringify(data));
    }
  });
});
buttonAdd.textContent = "TAMBAH BUKU";
// DELETE
const buttonDelete = document.createElement("a");
buttonDelete.setAttribute("id", "method-detail");
buttonDelete.classList.add("button-method", "button-delete");
buttonDelete.addEventListener("click", (e) => {
  Popup("KAMU YAKIN INI MAU DI HAPUS?", (result) => {
    if (result == "IYA") {
      data.splice(i, 1);
      localStorage.setItem("data", JSON.stringify(data));
      window.location = "./index.html";
    }
  });
});
buttonDelete.textContent = "DELETE";
//REPLECE
const buttonReplece = document.createElement("a");
buttonReplece.setAttribute("id", "method-detail");
buttonReplece.classList.add("button-method", "button-replece");
buttonReplece.addEventListener("click", (e) => {
  Popup("MAU DI BACA LAGI ?", (result) => {
    if (result == "IYA") {
      location.reload(true);
      data[i].isCompleted = false;
      localStorage.setItem("data", JSON.stringify(data));
    }
  });
});
buttonReplece.textContent = "REPLECE";
//DONE
const buttonDONE = document.createElement("a");
buttonDONE.setAttribute("id", "method-detail");
buttonDONE.classList.add("button-method", "button-done");
buttonDONE.addEventListener("click", (e) => {
  Popup("SUDAH SELESAI BACA BUKUNYA ?", (result) => {
    if (result == "IYA") {
      location.reload(true);
      data[i].isCompleted = true;
      localStorage.setItem("data", JSON.stringify(data));
    }
  });
});
buttonDONE.textContent = "DONE";

if (data.isRecomended == true) {
  // MASUKIN
  containerBtn.appendChild(buttonAdd);
} else if (data.isRecomended == false && data.isCompleted == false) {
  // MASUKIN
  containerBtn.appendChild(buttonDelete);
  containerBtn.appendChild(buttonDONE);
} else if (data.isRecomended == false && data.isCompleted == true) {
  // MASUKIN
  containerBtn.appendChild(buttonDelete);
  containerBtn.appendChild(buttonReplece);
}
