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
  while (table.children > 1) {
    table.lastChild.remove;
  }
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
        if (read.innerText === "yes") {
          read.innerText = "no";
        } else {
          read.innerText = "yes";
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
        
        console.log(bbook);
        bbook.remove();
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
  let r = "yes";
  if (!read) {
    let r = "no";
  }
  const b = new Book(title.value, author.value, pn.value, r);
  library.push(b);
  displayLibrary();
}
