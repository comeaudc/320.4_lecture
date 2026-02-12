export default function CreateForm() {
  return (
    <fieldset>
      <legend>Add New Produce</legend>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Category:
          <select name="category">
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
          </select>
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" min={0} />
        </label>
        <br />
        <label>
          In stock:
          <input type="checkbox" name="stocked" />
        </label>
      </form>
    </fieldset>
  );
}
