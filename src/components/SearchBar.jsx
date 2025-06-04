const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
    />
  );
};

export default SearchBar;
