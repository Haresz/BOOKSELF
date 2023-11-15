const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const h2 = document.createElement("h2");
const a1 = document.createElement("a");
const a2 = document.createElement("a");
const popup = div1.setAttribute("class", "pop-up");
const topPopup = div2.setAttribute("class", "top-popup");
const containerBtn = div3.setAttribute(
  "class",
  "container-method-button-popup"
);
a1.setAttribute("class", "button-method button-delete");
a2.setAttribute("class", "button-method button-done");
div1.appendChild(div2);
div1.appendChild(h2);
div1.appendChild(div3);
div3.appendChild(a1);
div3.appendChild(a2);

h2.innerHTML = "INI ADALAH PERTANYAAN !?";
a2.innerHTML = "IYA";
a1.innerHTML = "TIDAK";

document.body.appendChild(div1);
