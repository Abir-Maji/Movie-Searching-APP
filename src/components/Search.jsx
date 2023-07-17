export const Search = ({ userInput, handleKeyDown, handleClick, handleChange }) => {
  return (
    <div className="search">
      <input
        value={userInput}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        type="text"
        placeholder="Search for movies..."
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
