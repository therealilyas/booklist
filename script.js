const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const description = document.getElementById("description");
const bookList = document.getElementById("bookList");
let books = [];
function addBook() {
  let book = {
    id: books.length,
    title: title.value,
    author: author.value,
    isbn: isbn.value,
    description: description.value,
  };
  books.push(book);
  bookPush(book);
  console.log(books);
  clearInput();
}

function bookPush(book) {
  const li = document.createElement("li");
  li.id = book.id;
  const bookTitleSpan = document.createElement("span");
  bookTitleSpan.innerText = book.title;
  const deleteBookBtn = document.createElement("button");
  deleteBookBtn.innerText = "x";
  deleteBookBtn.style.backgroundColor = "black";
  deleteBookBtn.style.color = "white";

  li.appendChild(bookTitleSpan);
  li.appendChild(deleteBookBtn);
  console.log(books[book.id]);
  deleteBookBtn.addEventListener("click", () => {
    console.log("Number of books in library " + books.length);
    delete books[book.id];

    books = books.filter((book) => {
      if (book !== undefined) {
        return book;
      }
    });

    li.remove();

    console.log("Number of employees in library " + books.length);
  });

  const bookDetails = document.createElement("div");
  bookDetails.style.display = "none";

  const bookAuthorP = document.createElement("p");
  bookAuthorP.innerText = book.author;
  bookDetails.appendChild(bookAuthorP);

  const bookISBN = document.createElement("p");
  bookISBN.innerText = book.isbn;
  bookDetails.appendChild(bookISBN);

  const bookDesP = document.createElement("p");
  bookDesP.innerText = book.description;
  bookDetails.appendChild(bookDesP);

  li.appendChild(bookDetails);

  li.onclick = function () {
    if (bookDetails.style.display == "block") {
      bookDetails.style.display = "none";

      li.style.backgroundColor = "white";
      li.style.color = "black";

      deleteBookBtn.style.backgroundColor = "black";
      deleteBookBtn.style.color = "white";
    } else {
      bookDetails.style.display = "block";
      li.style.backgroundColor = "black";
      li.style.color = "white";

      deleteBookBtn.style.backgroundColor = "white";
      deleteBookBtn.style.color = "black";
    }
  };

  bookList.appendChild(li);
}
function clearInput() {
  title.value = "";
  author.value = "";
  isbn.value = "";
  description.value = "";
}

function downloadList() {
  let data;
  books.forEach((book) => {
    data = data + `<p>${JSON.stringify(book.title)}</p>`;
  });

  let header = "<h2>Book List</h2>";

  let theBody = '<div class="subject">' + data + "</div>";
  theBody = header + theBody;

  let newWin = window.open();

  newWin.document.write(theBody);
  newWin.print();
  newWin.close();
}
