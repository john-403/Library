const container = document.querySelector('.container');
function openForm() {
    document.getElementById("myForm").style.display = "block";
    /* document.getElementById("myForm").style.display = "inline-block"; */
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

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
const myBook2 = new Book('Deep Work', 'Cal Newport', 350);
addBookToLibrary(myBook2);

/* console.log(`1 Book displays like this ${myBook}`);
console.log(`1 Book name displays like this ${myBook.Bookname}`); */


for (let book of myLibrary) {
    // title div
    const div = document.createElement('div');
    const divT = document.createElement('div');
    const h2T = document.createElement('h2');
    const paraT = document.createElement('p');

    divT.classList.add('desc', 'title');
    h2T.textContent = 'Title:';
    paraT.textContent = `${book.Bookname}`;
    div.className = 'card';

    container.appendChild(div);
    div.appendChild(divT);
    divT.appendChild(h2T);
    divT.appendChild(paraT);
    //div.classList.add('card');

    // Author div

    const divA = document.createElement('div');
    const h2A = document.createElement('h2');
    const paraA = document.createElement('p');

    divA.classList.add('desc', 'author');
    h2A.textContent = 'Author:';
    paraA.textContent = `${book.author}`;

    div.appendChild(divA);
    divA.appendChild(h2A);
    divA.appendChild(paraA);

    // pages div

    const divP = document.createElement('div');
    const h2P = document.createElement('h2');
    const paraP = document.createElement('p');

    divP.classList.add('desc', 'pages');
    h2P.textContent = 'Pages:';
    paraP.textContent = `${book.pages}`;

    div.appendChild(divP);
    divP.appendChild(h2P);
    divP.appendChild(paraP);
}
