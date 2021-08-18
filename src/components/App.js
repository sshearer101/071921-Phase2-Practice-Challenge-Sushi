import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [sushi, setSushi] = useState([])

useEffect(() => {
  fetch(API)
  .then (res=>res.json())
  .then (setSushi)
}, [])

function deleteSushi(id){
  fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Accepts: 'application/json',
      'Content-type': 'application/json'
    }
  })
    .then(res => setSushi(sushi.filter((sushi) => sushi.id !== id) ) )
}

  return (
    <div className="app">
      <SushiContainer sushi={sushi} handleDelete={deleteSushi}/>
      <Table />
    </div>
  );
}

export default App;
