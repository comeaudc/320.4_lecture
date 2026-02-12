import "./App.css";
import { useState } from "react";
import axios from "axios";
import FilterableProductTable from "./components/FilterableProductTable.jsx";
import CreateForm from "./components/CreateForm.jsx";

function App() {
  const [produce, setProduce] = useState(null);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:3000/api/produce");

      let sorted = res.data.sort((a, b) => {
        if(a.category < b.category){
          return -1
        }

        if(a.category > b.category){
          return 1
        }

        return 0
      });

      setProduce(sorted);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {produce ? (
        <FilterableProductTable produce={produce} />
      ) : (
        <button onClick={getData}>Get Data</button>
      )}
      <CreateForm setProduce={setProduce} produce={produce} />
    </>
  );
}

export default App;
