import "../css/App.css";
import { Route, Routes } from "react-router-dom";
import BookSearch from "./BookSearch";
import HomeLibrary from "./HomeLibrary";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const list = await BooksAPI.getAll();
      setBooks(list);
    };
    getBooks();
  }, []);

  const doUpdate = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
    book.shelf = newShelf;
    setBooks(books.filter((b) => b?.id !== book.id).concat(book));
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<HomeLibrary Books={books} updateShelf={doUpdate} />}
      />
      <Route path="/search" element={<BookSearch updateShelf={doUpdate} Books={books} />} />
    </Routes>
  );
};

export default App;
