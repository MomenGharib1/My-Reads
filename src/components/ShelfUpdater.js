import PropTypes from "prop-types";

const ShelfUpdater = ({ book, updateShelf }) => {
  let shelf = "none";
  if (book?.shelf) {
    shelf = book?.shelf;
  }
  const handleUpdates = (event) => {
    updateShelf(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select defaultValue={shelf} onChange={handleUpdates}>
        <option value="no" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
ShelfUpdater.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
};
export default ShelfUpdater;
