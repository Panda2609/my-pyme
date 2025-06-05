import '../styles/SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-wrapper">
      <FaSearch className="search-bar-icon" />
      <input
        className="search-bar-input"
        type="text"
        placeholder="Buscar por nombre..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
