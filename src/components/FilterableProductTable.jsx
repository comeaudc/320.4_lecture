import { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";

export default function FilterableProductTable({ produce }) {
  const [formData, setFormData] = useState({
    searchText: "",
    inStock: false,
  });

  return (
    <div>
      <SearchBar formData={formData} setFormData={setFormData} />
      <ProductTable produce={produce} formData={formData} />
    </div>
  );
}
