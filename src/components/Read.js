import ShelfUpdater from "./ShelfUpdater";
import PropTypes from "prop-types";

const Read = ({ Books, updateShelf, Shelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
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
                  ></div>
                  <ShelfUpdater book={b} updateShelf={updateShelf} />
                </div>
                <div className="book-title"> {b?.title}</div>
                <div className="book-authors">{b?.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
Read.propTypes = {
  Books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  Shelf: PropTypes.string.isRequired,
};
export default Read;
