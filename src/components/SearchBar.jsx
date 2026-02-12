export default function SearchBar({ formData, setFormData }) {
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        name="searchText"
        onChange={handleChange}
        value={formData.searchText}
        placeholder="Search..."
      />
      <br />
      <label>
        <input
          type="checkbox"
          name="inStock"
          onChange={handleChange}
          checked={formData.inStock}
        />
        Only show products in stock
      </label>
    </form>
  );
}
