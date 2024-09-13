class Book {
    constructor (title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
        this.available = true
    }

    borrowBook() {
        if (this.available) {
            this.available = false
            console.log (`You have borrowed ${this.title} by ${this.author},`)
        } else {
            console.log (`The book ${this.title} by ${this.author} is not available.`)
        }
    }
    // Method to return thr book

    returnBook () {
        this.available = true
        console.log (`The book ${this.title} ${this.author}has been returned`)
    }
}

//example use

const book1 = new Book ('The Right man ', 'Chinua Achebe','183-5463728898')
console.log (book1.available) // true

book1.borrowBook()
console.log(book1.available)// false

book1.borrowBook()// The book " 1980 " is not available
book1.returnBook() //The book "1980" has been returned
console.log (book1.available)

class Library{
    constructor() {''
        this.book = []
    }

    addBook(book) {
        if (book instanceof Book) {
            this.book.push(book)
            console.log(`Book ${book.title} added to the Library`)
        }else {
            console.log ('The provided object is not a real book.')
        }
    }

    removeBook(isbn) {
        const index = this.book.findIndex(book => book.isbn === isbn)
        if (index !== -1) {
            
            const removedBook= this.book.splice(index, 1)[0]
            console.log(`Book "${removedBook.title}" removed from the library`)

        }else {
            console.log('Book not found')
        }
    }
    findBookByTitle(title) {
        let book = this.book.find(book => book.title===title )
        if (book) {
            return book
        } else{
            console.log ("Book not found.")
            return null
        }
    }
}

// example usage

const library = new Library()

const boook1 = new Book( 'A flea', 'Wole soyinkA', '978-2132323')
const boook2 = new Book( 'A spy', 'Ope Yemi', ' 978-21452323')

library.addBook(boook1)
library.addBook(boook2)

console.log( library.findBookByTitle('A flea'))
library.removeBook('978-2132323')

console.log (library.findBookByTitle('A flea'))

//Digital Library Class

class DigitalLibrary extends Library{
    downloadBook(isbn) {
        const books = this.book.find(book=> book.isbn ===isbn)
        if (books){
            if (books.available) {
                console.log (`Downloading book '${books.title}'..... 80% complete`)
    
            }else {
                console.log (`The book "${books.title}" is not available for download.`)
            }
        } else {
            console.log ("Book not found")
        }
    }
}

// Example usage
const digitalLibrary = new DigitalLibrary()

const bookk1 = new Book( 'A flea', 'Wole soyinkA', '978-2132323')
const bookk2 = new Book( 'A spy', 'Ope Yemi', ' 978-21452323')

digitalLibrary.addBook(bookk1)
digitalLibrary.addBook(bookk2)

console.log (digitalLibrary.findBookByTitle(' A flea'))

digitalLibrary.downloadBook('978-2132323')
digitalLibrary.downloadBook(' 978-21452323')
digitalLibrary.downloadBook('978-2667676777')// book not found

