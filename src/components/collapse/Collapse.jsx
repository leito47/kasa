import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Collapse({ title, content, divStyle = { width: "100%" } }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCollapse = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="fullWidth" style={divStyle}>
      <div className="collapse " onClick={openCollapse}>
        <h1>{title}</h1>

        <p>
          <FontAwesomeIcon
            icon={isOpen ? faAngleUp : faAngleDown}
            style={{ fontSize: "24px" }}
          />
        </p>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
