import React from "react";
import { Link } from "react-router-dom";
function Card({ cover, title, id }) {
  return (
    <div className="cards">
      <article id={id}>
        <Link to={`/housing/${id}`}>
          <img src={cover} alt={title} />
          <h2>{title}</h2>
        </Link>
      </article>
    </div>
  );
}
export default Card;
