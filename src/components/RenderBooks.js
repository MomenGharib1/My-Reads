import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
const RenderBooks = ({ Books, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading
            Books={Books}
            updateShelf={updateShelf}
            Shelf="currentlyReading"
          />
          <WantToRead
            Books={Books}
            updateShelf={updateShelf}
            Shelf="wantToRead"
          />
          <Read Books={Books} updateShelf={updateShelf} Shelf="read" />
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
