import { BOOKS } from "./dumy.js";

// SROLL
const element = document.getElementById("rekomendasiBuku");
const chevron_left = document.getElementById("chevron_left");
const chevron_right = document.getElementById("chevron_right");
element.addEventListener("scroll", (a) => {
  console.log(element.scrollLeft + "px");
});
chevron_left.addEventListener("click", () => {
  const coba = element.scrollLeft - 40;
  element.scrollLeft = coba;
});
chevron_right.addEventListener("click", () => {
  const coba = element.scrollLeft + 40;
  element.scrollLeft = coba;
});

// GET /books
for (let i = 0; i < BOOKS.length; i++) {
  console.log(BOOKS[i].cover);
  if (BOOKS[i].isRecomended == true) {
    const rekomendasi = document.getElementById("rekomendasiBuku");

    // CARD
    const card = document.createElement("div");
    card.classList.add("card");

    // CARD IMG
    const cardimg = document.createElement("img");
    cardimg.setAttribute("src", BOOKS[i].cover);
    cardimg.setAttribute("alt", BOOKS[i].judul);

    // P-JUDUL
    const judulbk = document.createElement("p");
    judulbk.classList.add("judul-buku");
    judulbk.textContent = BOOKS[i].judul;

    // P-PENULIS
    const penulisbk = document.createElement("p");
    penulisbk.classList.add("penulis-buku");
    penulisbk.textContent = BOOKS[i].penulis;

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
  }
}

localStorage.setItem("data", JSON.stringify(BOOKS));
