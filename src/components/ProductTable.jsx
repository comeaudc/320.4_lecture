import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";
import products from "../utilities/data.js";

export default function ProductTable() {
  let rows = [];
  // OG category = null
  let category = null;

  products.forEach((product) => {
    // For every object, if OG category !== current objects category
    if (category !== product.category) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />,
      );
      category = product.category;
    }

    rows.push(<ProductRow key={product.name} {...product} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
