const container = document.querySelector('.container');


let myLibrary = [];

function Book(Bookname, author, pages) {
    this.Bookname = Bookname;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(Book) {
    /*     const book = new Book(Bookname, author, pages);
        myLibrary.push(book);
        return myLibrary */
    myLibrary.push(Book);
    return console.log(myLibrary)
}

const myBook = new Book('Valkyries', 'Paulo Coelho', 300);
addBookToLibrary(myBook);

console.log(`1 Book displays like this ${myBook}`);
console.log(`1 Book name displays like this ${myBook.Bookname}`);

div = document.createElement('div');
//console.dir(div)
div.className = 'card';
div.textContent = "Hellozz";
container.appendChild(div);