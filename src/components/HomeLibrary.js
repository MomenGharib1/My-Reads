import RenderBooks from "./RenderBooks";
import PropTypes from "prop-types";

const HomeLibrary = ({ Books, updateShelf }) => {
  return (
    <div className="app">
      <RenderBooks Books={Books} updateShelf={updateShelf} />
    </div>
  );
};

HomeLibrary.propTypes = {
  Books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};
export default HomeLibrary;
