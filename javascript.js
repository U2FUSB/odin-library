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

function addBookToLibrary() {
    // take some arguments,
    // create a book from those arguments, and
    // store the new book object into an array
}

function displayBooks() {
    // Display in any visual way on the page
    // should work distinct of the book objects
    // add removal button on each books display (could use a data-attribute in relation to books id)
    // add read button on each book, to change its read status (using a prototype function)
}

const book1 = new Book("MyTitle", "MyAuthor", 200, true);

console.log(myLibrary);
console.log(book1.info());
