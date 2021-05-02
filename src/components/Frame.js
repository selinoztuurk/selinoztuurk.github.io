import React from "react";
import "./Frame.css";

const Frame = ({ src, alt, id, onFrameSelect }) => {
  return (
    <div
      className="mainFrame"
      onClick={() => {
        if (!id.includes("logo")) onFrameSelect(id);
      }}
    >
      <div style={{ margin: "auto" }}>
        <img className="frameImage" src={src} alt={alt} id={id} />
      </div>
    </div>
  );
};

export default Frame;
