import { BiSearch } from 'react-icons/bi';
import './searchInput.css';

const SearchInput = () => {
  return (
    <div className="navbar-search-container">
      <input
        className="navbar-search-input"
        type="text"
        placeholder="Search..."
      />
      <BiSearch className="navbar-search-icon" />
    </div>
  );
};

export default SearchInput;
