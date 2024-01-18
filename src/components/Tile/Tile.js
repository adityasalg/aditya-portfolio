import React from "react";
import "./Tile.css";

const Tile = (props) => {
  return (
    <div className="tile-container" style={props.style}>
      <img
        className="tile-logo"
        src={require(`../../assets/logo/${props.imgName}`)}
      />
      <span className="tile-title">{props.children}</span>
    </div>
  );
};

export default Tile;
