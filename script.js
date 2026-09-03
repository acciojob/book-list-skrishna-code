//your JS code here. If required.
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title.value}</td>
    <td>${author.value}</td>
    <td>${isbn.value}</td>
    <td><button class="delete">Clear</button></td>
  `;

  bookList.appendChild(row);

  title.value = "";
  author.value = "";
  isbn.value = "";
});

bookList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.parentElement.remove();
  }
});