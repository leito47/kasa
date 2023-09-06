import React from "react";
import arrowDown from "../../assets/arrowDown_About.png";
import arrowUp from "../../assets/arrowUp_About.png";
import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCollapse = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-visible" onClick={openCollapse}>
        <h1>{title}</h1>

        <img
          className={isOpen ? "toggle-up" : "toggle-down"}
          src={isOpen ? arrowDown : arrowUp}
          alt={isOpen ? "arrow-up" : "arrow-down"}
        />
      </button>
      <div
        className={isOpen ? "collapse-hidden animated " : "collapse-hidden "}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
