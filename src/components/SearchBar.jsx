import '../styles/SearchBar.css'

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      className="search-bar-input"
      type="text"
      placeholder="Buscar por nombre..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
