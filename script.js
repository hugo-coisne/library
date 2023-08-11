let library = [];

function Book(title, author, npages, read) {
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.read = read;
}

library = [
  new Book("The Hobbit", "Tolkien", 1000, "no"),
  new Book("Dune", "Herbert", 1019, "no"),
  new Book("Harry Potter", "J.K. Rowling", 400, "yes"),
  new Book("The Hobbit", "Tolkien", 1000, "no"),
  new Book("Dune", "Herbert", 1019, "no"),
  new Book("Harry Potter", "J.K. Rowling", 400, "yes"),
  new Book("The Hobbit", "Tolkien", 1000, "no"),
  new Book("Dune", "Herbert", 1019, "no"),
  new Book("Harry Potter", "J.K. Rowling", 400, "yes"),
  new Book("The Hobbit", "Tolkien", 1000, "no"),
  new Book("Dune", "Herbert", 1019, "no"),
  new Book("Harry Potter", "J.K. Rowling", 400, "yes"),
  new Book("The Hobbit", "Tolkien", 1000, "no"),
  new Book("Dune", "Herbert", 1019, "no"),
];

const table = document.querySelector("tbody");

for (let i in library) {
  const book = document.createElement("tr");
  for (let j in library[i]) {
    if (j == "read") {
      continue;
    }
    const td = document.createElement("td");
    td.innerHTML = library[i][j];
    book.appendChild(td);
  }

  const toggle = document.createElement("button");
  const td2 = document.createElement("td");
  td2.classList = "but";
  toggle.innerHTML = library[i].read;
  toggle.type = "button";
  toggle.onclick = function () {
    let read = Array.from(this.parentNode.parentNode.children)[3].children[0];
    if (read.innerText === "yes") {
      read.innerText = "no";
    } else {
      read.innerText = "yes";
  };
}
  td2.appendChild(toggle);
  book.appendChild(td2);

  const deleter = document.createElement("button");
  const td3 = document.createElement("td");
  td3.classList = "but";
  deleter.innerText = "Delete";
  deleter.onclick = function () {
    let bbook = this.parentNode.parentNode;
    let tbody = bbook.parentNode;
    bbook.remove();
  };

  td3.appendChild(deleter);
  book.appendChild(td3);
  table.appendChild(book);
}
