import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import ShelfUpdater from "./ShelfUpdater";
import * as BooksAPI from "./BooksAPI";

const BookSearch = ({ updateShelf, Books }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const Search = (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query !== "" && query !== " ") {
      BooksAPI.search(query.trim(), 20).then((list) => {
        list?.length > 0 ? setResult(list) : setResult([]);
      });
    } else if (query.startsWith(" ", 0)) {
      setResult([]);
    } else {
      setResult([]);
    }
  };
  
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < Books.length; j++) {
      if (result[i].id === Books[j].id) {
        result[i].shelf = Books[j]?.shelf;
      } else continue;
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={Search}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {result.length !== 0 && query !== "" ? (
            result.map((b) => (
              <li key={b?.id}>
                {" "}
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${b?.imageLinks?.thumbnail})`,
                      }}
                    ></div>
                    <ShelfUpdater book={b} updateShelf={updateShelf} />
                  </div>
                  <div className="book-title">{b?.title}</div>
                  <div className="book-authors">{b?.authors}</div>
                </div>{" "}
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ol>
      </div>
    </div>
  );
};

BookSearch.propTypes = {
  Books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BookSearch;
