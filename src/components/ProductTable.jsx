import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";
import products from "../utilities/data.js";

export default function ProductTable({ formData, produce }) {
  let rows = [];
  // OG category = null
  let category = null;

  produce.forEach((product) => {
    if (formData.inStock && !product.stocked) return;

    if (!product.name.toLowerCase().includes(formData.searchText.toLowerCase()))
      return;

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
