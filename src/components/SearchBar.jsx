function SearchBar({ filterText, inStockOnly, setFilterText, setInStockOnly }) {
  function handleToggle() {
    setInStockOnly((inStockOnly) => {
      return !inStockOnly;
    });
  }

  return (
    <form className='searchBar'>
      <input
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
        type='text'
        placeholder='Search...'
      />
      <label htmlFor='productsInStock'>
        <input
          onClick={handleToggle}
          defaultChecked={inStockOnly}
          type='checkBox'
          id='productsInStock'
        />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
