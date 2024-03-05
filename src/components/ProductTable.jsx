import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStockOnly }) {
  //create array to store all data rows
  let rows = []
  let lastCategory = null

  //Iterate over products to create rows
  products.forEach((item, i)=>{
    
    if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !item.stocked) {
      return;
    }
    //If last catergory is NOT the same as previous, create a new category row
    if(item.category !== lastCategory){
      rows.push(<ProductCategoryRow category={item.category} />)
    }

    rows.push(<ProductRow name={item.name} price={item.price} stocked={item.stocked} />)

    lastCategory = item.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default ProductTable;
