const Form = ({
    selectedBook,
    handleChange,
    addBook,
    updateBook,
    deleteBook,
}) => {
    const disableSaveButton =
        selectedBook.title === undefined ||
        selectedBook.author === undefined;
    return (
        <div className="form-container">
            <form>
                <label>
                    Title
                    <input
                        type="text"
                        value={selectedBook.title || ''}
                        onChange={(e) =>
                            handleChange({
                                ...selectedBook,
                                title: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Author
                    <input
                        value={selectedBook.author || ''}
                        onChange={(e) =>
                            handleChange({
                                ...selectedBook,
                                author: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Description
                    <textarea
                        rows="7"
                        value={selectedBook.description || ''}
                        onChange={(e) =>
                            handleChange({
                                ...selectedBook,
                                description: e.target.value,
                            })
                        }
                    />
                </label>
                <div className="button-container">
                    <button
                        disabled={disableSaveButton}
                        type="submit"
                        onClick={addBook}
                    >
                        Save new
                    </button>
                    <button
                        disabled={selectedBook.id === undefined}
                        type="submit"
                        onClick={updateBook}
                    >
                        Save
                    </button>
                    <button
                        disabled={selectedBook.id === undefined}
                        type="button"
                        onClick={deleteBook}
                    >
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
