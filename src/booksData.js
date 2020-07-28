// factory function for books
function Book(title,author,pages,read){
    return{
        title, author, pages, read
    }
}

// dummy book placeholder
let book1 = Book("Book1", "Author1", "100", false)

// getting the books data from local storage
let stored = JSON.parse(localStorage.getItem("books"));
let allBooks;

// if exists then its the new book data
if (stored){
    allBooks = stored;
}

// else use dummy book as the main
else{
    allBooks = [
        book1,
    ]
}

// exports
export {Book, allBooks}