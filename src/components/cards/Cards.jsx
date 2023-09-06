import React from "react";
function Card({ cover, title }) {
  return (
    <div className="cards">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}
export default Card;
