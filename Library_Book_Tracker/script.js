class Book {
  #status; // private

  constructor(bookName, author) {
    this.bookName = bookName;
    this.author = author;
    this.#status = "Available";
  }

  getStatus() {
    return this.#status;
  }

  issueBook() {
    this.#status = "Issued";
  }

  returnBook() {
    this.#status = "Available";
  }
}

let bookArray = [];
let saveButton = document.getElementById("saveButton");
let bookList = document.getElementById("bookList");
let bookNameInput = document.getElementById("bookName");
let authorInput = document.getElementById("author");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  let bookName = bookNameInput.value.trim();
  let author = authorInput.value.trim();

  if (bookName === "" || author === "") {
    return alert("Please enter both book name and author!");
  }

  bookArray.push(new Book(bookName, author));
  bookNameInput.value = "";
  authorInput.value = "";
  renderBook();
});

function renderBook() {
  bookList.innerHTML = "";

  bookArray.forEach((b) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = `${b.bookName} - by ${b.author} | ${b.getStatus()}`;

    let actionButton = document.createElement("button");
    actionButton.textContent = b.getStatus() === "Available" ? "Issue" : "Return";

    actionButton.addEventListener("click", () => {
      if (b.getStatus() === "Available") {
        b.issueBook();
      } else {
        b.returnBook();
      }
      renderBook();
    });

    li.appendChild(span);
    li.appendChild(actionButton);
    bookList.appendChild(li);
  });
}

renderBook();