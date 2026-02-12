export default function SearchBar() {
  return (
    <form>
      <input type="text" name="searchText" placeholder="Search..." />
      <br />
      <label>
        <input type="checkbox" name="stocked" />
        Only show products in stock
      </label>
    </form>
  );
}
