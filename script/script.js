import { Popup } from "./popup.js";
const dataStorage = localStorage.getItem("data");
const data = JSON.parse(dataStorage);

let card;

// GET /books
for (let i = 0; i < data.length; i++) {
  const containerCard1 = document.getElementById("container-card1");
  const containerCard2 = document.getElementById("container-card2");
  // CARD
  card = document.createElement("div");
  card.classList.add("card");

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

  if (data[i].isComplete == false) {
    // MASUKIN
    containerCard1.appendChild(card);
    card.appendChild(judulbk);
    card.appendChild(penulisbk);
    hrefMethod.appendChild(edit);
    hrefMethod.appendChild(detail);
    card.appendChild(hrefMethod);
    containerBtn.appendChild(buttonDelete);
    containerBtn.appendChild(buttonDONE);
    card.appendChild(containerBtn);
  } else if (data[i].isComplete == true) {
    // MASUKIN
    containerCard2.appendChild(card);
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
    const judul = card.querySelector(".judul-buku").textContent.toLowerCase();
    const penulis = card
      .querySelector(".penulis-buku")
      .textContent.toLowerCase();
    const isVisible = judul.includes(value) || penulis.includes(value);

    if (!isVisible) {
      card.classList.add("hide");
    } else {
      card.classList.remove("hide");
    }
  });
});
