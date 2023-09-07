import React from "react";
import redStar from "../../assets/red-star.png";
import whiteStar from "../../assets/white-star.png";

function Rating({ rating, maxRating }) {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    const isRed = i <= rating;
    stars.push(
      <img
        key={i}
        src={isRed ? redStar : whiteStar}
        alt={isRed ? "Red Star" : "White Star"}
      />
    );
  }

  return <div>{stars}</div>;
}

export default Rating;
