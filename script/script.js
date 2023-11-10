import { BOOKS } from "./dumy";
console.log(BOOKS);
const rekomendasi = document.getElementById("coba");

// CARD
const card = document.createElement("div");
card.classList.add("card");

// CARD IMG
const cardimg = document.createElement("img");
cardimg.setAttribute("src", "./src/IKIGAI.jpg");

// P-JUDUL
const judulbk = document.createElement("p");
judulbk.classList.add("judul-buku");
judulbk.textContent = "IKIGAI";

// P-PENULIS
const penulisbk = document.createElement("p");
penulisbk.classList.add("penulis-buku");
penulisbk.textContent = "HECTOR GARCIA";

// HREF METHODS
const hrefMethod = document.createElement("div");
hrefMethod.classList.add("href-method");
const edit = document.createElement("a");
edit.setAttribute("href", "./edit.html");
edit.textContent = "edit ||";
const detail = document.createElement("a");
detail.setAttribute("href", "./detail.html");
detail.textContent = " detail";

// BUTTONS METHOD
const containerBtn = document.createElement("div");
containerBtn.classList.add("container-method-button");
const buttonAdd = document.createElement("a");
buttonAdd.classList.add("button-method", "button-add");
buttonAdd.setAttribute("href", "./tambah.html");
buttonAdd.textContent = "TAMBAH BUKU";

// MASUKIN
rekomendasi.appendChild(card);
card.appendChild(cardimg);
card.appendChild(judulbk);
card.appendChild(penulisbk);
hrefMethod.appendChild(edit);
hrefMethod.appendChild(detail);
card.appendChild(hrefMethod);
containerBtn.appendChild(buttonAdd);
card.appendChild(containerBtn);
