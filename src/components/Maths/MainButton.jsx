import React from "react";
import "./style.css";
function MainButton({ title, onressevent }) {
  return (
    <div className="button" onClick={onressevent}>
      <p className="buttonText">{title}</p>
    </div>
  );
}

export default MainButton;
