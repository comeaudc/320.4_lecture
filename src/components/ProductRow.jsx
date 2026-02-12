export default function ProductRow({ price, name, stocked }) {
  let style = {
    color: stocked ? "" : "red",
  };

  return (
    <tr>
      <td style={style}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
