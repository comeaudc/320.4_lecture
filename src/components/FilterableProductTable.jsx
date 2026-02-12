import { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";

export default function FilterableProductTable() {
  const [formData, setFormData] = useState({
    searchText: "",
    inStock: false,
  });

  return (
    <div>
      <SearchBar formData={formData} setFormData={setFormData} />
      <ProductTable formData={formData} />
    </div>
  );
}