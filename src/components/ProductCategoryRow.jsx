function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th align='center' colSpan={2}>
        {category}
      </th>
    </tr>
  );
}

export default ProductCategoryRow;
