let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary = [
      ...myLibrary,
      new Book("Robinson Crusoe", "Daniel Defoe", 252, true),
      new Book("The Old Man and the Sea", "Ernest Hemingway", 127, true),
    ];
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, parseInt(pages.value), check.checked);
    myLibrary.push(book);
    render();
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // Delete old rows from the table
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  // Add rows for each book in the library
  myLibrary.forEach((book, index) => {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;

    // Read Button
    let changeBut = document.createElement("button");
    changeBut.id = index;
    changeBut.className = "btn btn-success";
    changeBut.innerHTML = book.read ? "Yes" : "No";
    changeBut.addEventListener("click", function () {
      book.read = !book.read;
      render();
    });
    cell4.appendChild(changeBut);

    // Delete Button
    let delButton = document.createElement("button");
    delButton.id = index + 5;
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
    cell5.appendChild(delButton);
  });
}
