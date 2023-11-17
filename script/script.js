import { BOOKS } from "./dumy.js";
import { Popup } from "./popup.js";
const cekStorage = localStorage.getItem("data");
if (cekStorage == null) {
  localStorage.setItem("data", JSON.stringify(BOOKS));
}
const dataStorage = localStorage.getItem("data");
const data = JSON.parse(dataStorage);

// SROLL
const element = document.getElementById("container-card");
const chevron_left = document.getElementById("chevron_left");
const chevron_right = document.getElementById("chevron_right");
element.addEventListener("scroll", () => {
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

let card;

// GET /books
for (let i = 0; i < data.length; i++) {
  const containerCard = document.querySelectorAll("#container-card");
  // CARD
  card = document.createElement("div");
  card.classList.add("card");

  // CARD IMG
  const cardimg = document.createElement("img");
  cardimg.setAttribute("src", data[i].cover);
  cardimg.setAttribute("alt", data[i].title);

  // P-JUDUL
  const judulbk = document.createElement("p");
  judulbk.classList.add("judul-buku");
  judulbk.textContent = data[i].title;

  // P-PENULIS
  const penulisbk = document.createElement("p");
  penulisbk.classList.add("penulis-buku");
  penulisbk.textContent = data[i].author;

  // HREF METHODS
  const hrefMethod = document.createElement("div");
  hrefMethod.classList.add("href-method");
  const edit = document.createElement("a");
  edit.setAttribute("href", "./edit.html");
  edit.textContent = "edit ||";
  edit.addEventListener("click", (e) => {
    let sendData = JSON.stringify(i);
    localStorage.setItem("ID", sendData);
  });
  const detail = document.createElement("a");
  detail.setAttribute("href", "./detail.html");
  detail.textContent = " detail";
  detail.addEventListener("click", (e) => {
    let sendData = JSON.stringify(i);
    localStorage.setItem("ID", sendData);
  });

  //######### BUTTONS METHOD #########
  const containerBtn = document.createElement("div");
  containerBtn.classList.add("container-method-button");
  // ADD
  const buttonAdd = document.createElement("a");
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
  buttonDelete.classList.add("button-method", "button-delete");
  buttonDelete.addEventListener("click", (e) => {
    Popup("KAMU YAKIN INI MAU DI HAPUS?", (result) => {
      if (result == "IYA") {
        location.reload(true);
        data.splice(i, 1);
        localStorage.setItem("data", JSON.stringify(data));
      }
    });
  });
  buttonDelete.textContent = "DELETE";
  //REPLECE
  const buttonReplece = document.createElement("a");
  buttonReplece.classList.add("button-method", "button-replece");
  buttonReplece.addEventListener("click", (e) => {
    Popup("MAU DI BACA LAGI ?", (result) => {
      if (result == "IYA") {
        location.reload(true);
        data[i].isComplete = false;
        localStorage.setItem("data", JSON.stringify(data));
      }
    });
  });
  buttonReplece.textContent = "REPLECE";
  //DONE
  const buttonDONE = document.createElement("a");
  buttonDONE.classList.add("button-method", "button-done");
  buttonDONE.addEventListener("click", (e) => {
    Popup("SUDAH SELESAI BACA BUKUNYA ?", (result) => {
      if (result == "IYA") {
        location.reload(true);
        data[i].isComplete = true;
        localStorage.setItem("data", JSON.stringify(data));
      }
    });
  });
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
  } else if (data[i].isRecomended == false && data[i].isComplete == false) {
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
  } else if (data[i].isRecomended == false && data[i].isComplete == true) {
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

// SEARCH BAR
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const judul = card.querySelector(".title-buku").textContent.toLowerCase();
    const penulis = card
      .querySelector(".author-buku")
      .textContent.toLowerCase();
    const isVisible = judul.includes(value) || penulis.includes(value);

    if (!isVisible) {
      card.classList.add("hide");
    } else {
      card.classList.remove("hide");
    }
  });
});
