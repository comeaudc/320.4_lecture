import './App.css';
import FilterableProductsTable from './components/FilterableProductsTable';
import productData from './data/productData.mjs';

function App() {

  return (
    <>
      <FilterableProductsTable products={productData} />
    </>
  );
}

export default App;
