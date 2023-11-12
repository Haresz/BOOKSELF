const submit = document.getElementById("submit");

function generateId() {
  return +new Date();
}

function add() {
  const judulBuku = document.getElementById("judul-buku").value;
  const pengarangBuku = document.getElementById("pengarang-buku").value;
  const tahunBuku = document.getElementById("tahun-buku").value;
  const deskripsiBuku = document.getElementById("deskripsi-buku").value;
  const coverBuku = document.getElementById("cover-buku").value;

  const generateID = generateId();
  const todoObject = {
    id: generateID,
    judul: judulBuku,
    penulis: pengarangBuku,
    cover: coverBuku,
    tahun: tahunBuku,
    isCompleted: false,
    isRecomended: false,
  };

  // const dataStorage = localStorage.getItem("rekomendasi");
  const data = [];
  console.log(data);

  data.push(todoObject);

  console.log(data);

  localStorage.setItem("data", JSON.stringify(data));
}

submit.addEventListener("click", (e) => {
  add(e.target);
});
