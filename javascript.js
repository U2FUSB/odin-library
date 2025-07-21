const myLibrary = [];

const addBookButton = document.querySelector(".add-new-book");
const confirmButton = document.querySelector(".confirm");
const bookSection = document.querySelector(".books");
const dialog = document.querySelector(".popup");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function Book(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
    this.info = function () {
        let isReadMessage = "not read yet";
        if (this.isRead == true) {
            isReadMessage = "read";
        }
        return `${this.title} by ${this.author}, ${this.pages}, ${isReadMessage}`;
    };
}

function addToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}
function displayOnPage() {
    bookSection.innerHTML = "";
    myLibrary.forEach((obj) => {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(obj.info());
        const newRemoveButton = document.createElement("button");
        const newRemoveButtonText = document.createTextNode("Remove Book");
        newDiv.appendChild(newContent);
        newDiv.appendChild(newRemoveButton);
        newRemoveButton.appendChild(newRemoveButtonText);
        bookSection.appendChild(newDiv);
    });
}

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});

confirmButton.addEventListener("click", () => {
    addToLibrary(title.value, author.value, pages.value, read.checked);
    displayOnPage();
    dialog.close();
});

addToLibrary("MyTitle", "MyAuthor", 200, true);
addToLibrary("MyTitle2", "MyAuthor2", 210, false);
addToLibrary("TheHobbit", "Tolkien (probably written wrong)", 9999999, true);
displayOnPage();
