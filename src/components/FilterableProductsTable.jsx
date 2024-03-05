import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useState } from 'react';

function FilterableProductsTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText} setInStockOnly={setInStockOnly} />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}  />
    </div>
  );
}

export default FilterableProductsTable;
