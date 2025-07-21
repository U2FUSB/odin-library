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
    myLibrary.forEach((obj) => {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(obj.info());
        newDiv.appendChild(newContent);
        document.body.appendChild(newDiv);
    });

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