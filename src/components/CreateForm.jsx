import { useState } from "react";
import axios from "axios";

export default function CreateForm({ setProduce, produce }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    stocked: false,
  });

  function handleChange(e) {
    if (e.target.name == "stocked") {
      setFormData({ ...formData, stocked: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      let res = await axios.post("http://localhost:3000/api/produce", formData);

      let temp = [...produce, res.data];

      let sorted = temp.sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }

        if (a.category > b.category) {
          return 1;
        }

        return 0;
      });

      setProduce(sorted);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <fieldset>
      <legend>Add New Produce</legend>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label>
          Category:
          <select
            name="category"
            onChange={handleChange}
            value={formData.category}
          >
            <option value=""></option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
          </select>
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            onChange={handleChange}
            min={0}
            value={formData.price}
          />
        </label>
        <br />
        <label>
          In stock:
          <input
            type="checkbox"
            name="stocked"
            onChange={handleChange}
            checked={formData.stocked}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </fieldset>
  );
}
