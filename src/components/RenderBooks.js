import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ShelfUpdater from "./ShelfUpdater";
const RenderBooks = ({ Books, updateShelf }) => {
  const shelvies = ["currentlyReading", "wantToRead", "read"];
  const printing = ["Currently Reading", "Want to Read", "Read"];
  let i = 0;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelvies.map((Shelf) => (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{printing[i++]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {Books.filter((b) => b?.shelf === Shelf).map((b) => (
                    <li key={b?.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${b?.imageLinks?.thumbnail})`,
                            }}
                          >
                            {" "}
                          </div>
                          <ShelfUpdater book={b} updateShelf={updateShelf} />
                        </div>
                        <div className="book-title">{b?.title}</div>
                        <div className="book-authors">{b?.authors}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> Add a book </Link>
      </div>
    </div>
  );
};
RenderBooks.propTypes = {
  Books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default RenderBooks;
