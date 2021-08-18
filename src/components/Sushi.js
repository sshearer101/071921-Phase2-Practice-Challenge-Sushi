import React from "react";

function Sushi({ sushis, handleDelete}) {
  const { id, name, img_url, price } = sushis




  return (
    <div className="sushi" onClick={() => handleDelete(sushis.id)}>
      <div className="plate" >
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
