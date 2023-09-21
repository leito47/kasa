import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Carrousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    );
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <FontAwesomeIcon
          className="arrow arrow-left"
          icon={faAngleLeft}
          onClick={handlePrevSlide}
        />
      )}

      <img
        key={currentSlide}
        src={pictures[currentSlide]}
        alt="img-appartement"
        className="picture"
      />

      {pictures.length > 1 && (
        <FontAwesomeIcon
          className="arrow arrow-right"
          icon={faAngleRight}
          onClick={handleNextSlide}
        />
      )}
      {pictures.length > 1 && (
        <div className="infoIndex">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carrousel;
