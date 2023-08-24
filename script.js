// le port de la ceinture de sécurité est recommendé pour la lecture de ce code

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
];

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const table = document.querySelector("tbody");

function displayLibrary() {
  while (table.children.length > 1) {
    table.lastChild.remove;
  } // remove everything from the current table

  for (let i in library) {
    const book = document.createElement("tr");

    function datacells() {
      for (let j in library[i]) {
        if (j == "read") {
          continue;
        }
        const td = document.createElement("td");
        td.innerHTML = library[i][j];
        book.appendChild(td);
      }
    }
    datacells();
    function toggleReadCell() {
      const toggle = document.createElement("button");
      const td2 = document.createElement("td");
      td2.classList = "but toggle";
      toggle.innerHTML = library[i].read;
      toggle.type = "button";
      toggle.onclick = function () {
        let read = Array.from(this.parentNode.parentNode.children)[3]
          .children[0];
        let bbook = this.parentNode.parentNode.children[0].innerText;
        let x = 0;
        for (let k in library) {
          if (library[k].title === bbook) {
            x = k;
            break;
          }
        }
        if (library[x].read === "yes") {
          read.innerText = "no";
          library[x].read = "no";
        } else {
          read.innerText = "yes";
          library[x].read = "yes";
        }
      };
      td2.appendChild(toggle);
      book.appendChild(td2);
    }
    toggleReadCell();

    function deleteCell() {
      const deleter = document.createElement("button");
      const td3 = document.createElement("td");
      td3.classList = "but del";
      deleter.innerText = "Delete";
      deleter.onclick = function () {
        let bbook = this.parentNode.parentNode;
        for (let k in library) {
          if (bbook.firstChild.innerHTML === library[k].title) {
            library.splice(k, 1);
            bbook.remove();
            break;
          }
        }
      };

      td3.appendChild(deleter);
      book.appendChild(td3);
    }
    deleteCell();
    table.appendChild(book);
  }
}
displayLibrary();

function submit() {
  const title = document.querySelector("#btitle");
  const author = document.querySelector("#bauthor");
  const pn = document.querySelector("#bnpages");
  const read = document.querySelector("#bread");
  if ((title.value == "") | (author.value == "") | (pn.value == "")) {
    alert("Please fill all the fields before submitting");
    return;
  }
  let r = "yes";
  if (!read.checked) {
    r = "no";
  }

  const b = new Book(title.value, author.value, pn.value, r);
  title.value = "";
  author.value = "";
  pn.value = "";
  read.checked = false;
  library.push(b);
  const book = document.createElement("tr");
  for (let j in library[library.length - 1]) {
    if (j == "read") {
      continue;
    }
    const td = document.createElement("td");
    td.innerHTML = library[library.length - 1][j];
    book.appendChild(td);
  }
  const toggle = document.createElement("button");
  const td2 = document.createElement("td");
  td2.classList = "but toggle";
  toggle.innerHTML = library[library.length - 1].read;
  toggle.type = "button";
  toggle.onclick = function () {
    let read = Array.from(this.parentNode.parentNode.children)[3].children[0];
    let bbook = this.parentNode.parentNode.children[0].innerText;
    let x = 0;
    for (let k in library) {
      if (library[k].title === bbook) {
        x = k;
        break;
      }
    }
    if (library[x].read === "yes") {
      read.innerText = "no";
      library[x].read = "no";
    } else {
      read.innerText = "yes";
      library[x].read = "yes";
    }
  };
  td2.appendChild(toggle);
  book.appendChild(td2);
  const deleter = document.createElement("button");
  const td3 = document.createElement("td");
  td3.classList = "but del";
  deleter.innerText = "Delete";
  deleter.onclick = function () {
    let bbook = this.parentNode.parentNode;
    for (let k in library) {
      if (bbook.firstChild.innerHTML === library[k].title) {
        library.splice(k, 1);
        bbook.remove();
        break;
      }
    }
  };

  td3.appendChild(deleter);
  book.appendChild(td3);
  table.appendChild(book);
}
