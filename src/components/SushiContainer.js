import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi, handleDelete }) {


  const sushiList = sushi.map((sushis) => 
    <Sushi 
      key= {sushis.id}
      sushis={sushis}
      handleDelete={handleDelete}
    />
  )

  return (
    <div className="belt">
      {sushiList}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
