const BookList = ({ books, handleClick }) => {
    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books
                    ? books.map((book) => (
                          <li
                              className="book-content"
                              key={book.id}
                              onClick={() => handleClick(book.id)}
                          >
                              {book.author} – {book.title}
                          </li>
                      ))
                    : ''}
            </ul>
        </div>
    );
};

export default BookList;
