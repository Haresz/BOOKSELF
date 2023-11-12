import { BOOKS } from "./dumy.js";
const dataStorage = localStorage.getItem("data");
const data = JSON.parse(dataStorage);

// SROLL
const element = document.getElementById("container-card");
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
for (let i = 0; i < data.length; i++) {
  const containerCard = document.querySelectorAll("#container-card");
  // CARD
  const card = document.createElement("div");
  card.classList.add("card");

  // CARD IMG
  const cardimg = document.createElement("img");
  cardimg.setAttribute("src", data[i].cover);
  cardimg.setAttribute("alt", data[i].judul);

  // P-JUDUL
  const judulbk = document.createElement("p");
  judulbk.classList.add("judul-buku");
  judulbk.textContent = data[i].judul;

  // P-PENULIS
  const penulisbk = document.createElement("p");
  penulisbk.classList.add("penulis-buku");
  penulisbk.textContent = data[i].penulis;

  // HREF METHODS
  const hrefMethod = document.createElement("div");
  hrefMethod.classList.add("href-method");
  const edit = document.createElement("a");
  edit.setAttribute("href", "./edit.html");
  edit.textContent = "edit ||";
  const detail = document.createElement("a");
  detail.setAttribute("href", "./detail.html");
  detail.textContent = " detail";

  //######### BUTTONS METHOD #########
  const containerBtn = document.createElement("div");
  containerBtn.classList.add("container-method-button");
  // ADD
  const buttonAdd = document.createElement("a");
  buttonAdd.classList.add("button-method", "button-add");
  buttonAdd.setAttribute("href", "./tambah.html");
  buttonAdd.textContent = "TAMBAH BUKU";
  // DELETE
  const buttonDelete = document.createElement("a");
  buttonDelete.classList.add("button-method", "button-delete");
  buttonDelete.setAttribute("href", ".#");
  buttonDelete.textContent = "DELETE";
  //REPLECE
  const buttonReplece = document.createElement("a");
  buttonReplece.classList.add("button-method", "button-replece");
  buttonReplece.setAttribute("href", ".#");
  buttonReplece.textContent = "REPLECE";
  //REPLECE
  const buttonDONE = document.createElement("a");
  buttonDONE.classList.add("button-method", "button-done");
  buttonDONE.setAttribute("href", ".#");
  buttonDONE.textContent = "DONE";

  if (data[i].isRecomended == true) {
    // MASUKIN
    containerCard[0].appendChild(card);
    card.appendChild(cardimg);
    card.appendChild(judulbk);
    card.appendChild(penulisbk);
    hrefMethod.appendChild(edit);
    hrefMethod.appendChild(detail);
    card.appendChild(hrefMethod);
    containerBtn.appendChild(buttonAdd);
    card.appendChild(containerBtn);
  } else if (data[i].isRecomended == false && data[i].isCompleted == false) {
    // MASUKIN
    containerCard[1].appendChild(card);
    card.appendChild(cardimg);
    card.appendChild(judulbk);
    card.appendChild(penulisbk);
    hrefMethod.appendChild(edit);
    hrefMethod.appendChild(detail);
    card.appendChild(hrefMethod);
    containerBtn.appendChild(buttonDelete);
    containerBtn.appendChild(buttonDONE);
    card.appendChild(containerBtn);
  } else if (data[i].isRecomended == false && data[i].isCompleted == true) {
    // MASUKIN
    containerCard[2].appendChild(card);
    card.appendChild(cardimg);
    card.appendChild(judulbk);
    card.appendChild(penulisbk);
    hrefMethod.appendChild(edit);
    hrefMethod.appendChild(detail);
    card.appendChild(hrefMethod);
    containerBtn.appendChild(buttonDelete);
    containerBtn.appendChild(buttonReplece);
    card.appendChild(containerBtn);
  }
}

const cekStorage = localStorage.getItem("data");
if (cekStorage == null) {
  localStorage.setItem("data", JSON.stringify(BOOKS));
}
