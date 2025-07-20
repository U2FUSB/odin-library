const myLibrary = [];

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

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}
function displayObjectOnPage() {
    // should work distinct of the book objects
    // Display in any visual way on the page
    myLibrary.forEach((obj) => {
        console.log(obj);
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(obj.info());
        newDiv.appendChild(newContent);
        document.body.appendChild(newDiv);
    });
    // add removal button on each books display (could use a data-attribute in relation to books id)
    // add read button on each book, to change its read status (using a prototype function)
}

addBookToLibrary("MyTitle", "MyAuthor", 200, true);
addBookToLibrary("MyTitle2", "MyAuthor2", 210, false);
addBookToLibrary(
    "TheHobbit",
    "Tolkien (probably written wrong)",
    9999999,
    true
);
displayObjectOnPage();