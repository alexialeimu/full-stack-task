import { useState, useEffect } from 'react';
import bookService from './services/books';
import BookList from './components/BookList';
import Form from './components/Form';

function App() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState({});

    useEffect(() => {
        bookService.getAll().then((books) => setBooks(books));
    }, []);

    const addBook = (e) => {
        e.preventDefault();

        bookService
            .create(selectedBook)
            .then((book) => setBooks(books.concat(book)));
        setSelectedBook({});
    };

    const changeSelectedBook = (id) => {
        bookService.get(id).then((book) => setSelectedBook(book));
    };

    const deleteBook = () => {
        const id = selectedBook.id;
        bookService
            .remove(id)
            .then(() => {
                setBooks(books.filter((book) => book.id != id));
            })
            .catch((err) => console.log(err));
        setSelectedBook({});
    };

    const updateBook = (e) => {
        e.preventDefault();

        bookService
            .update(selectedBook.id, selectedBook)
            .then((books) => setBooks(books))
            .catch((err) => console.log(err));
        setSelectedBook({});
    };

    return (
        <div className="app">
            <Form
                selectedBook={selectedBook}
                handleChange={setSelectedBook}
                addBook={addBook}
                updateBook={updateBook}
                deleteBook={deleteBook}
            />
            <BookList
                books={books}
                handleClick={changeSelectedBook}
            />
        </div>
    );
}

export default App;
