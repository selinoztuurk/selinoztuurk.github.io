import React, { useState } from "react";
import FrameList from "../components/FrameList";
import "./ZoomCall.css";

const frameList = [
  { src: "/frames/avatar1.png", label: "Frame 1", id: 1 },
  { src: "/frames/avatar2.png", label: "Frame 2", id: 2 },
  { src: "/frames/avatar3.png", label: "Frame 3", id: 3 },
  { src: "/frames/avatar4.png", label: "Frame 4", id: 4 },
  { src: "/frames/avatar5.png", label: "Frame 5", id: 5 },
  { src: "/frames/avatar6.png", label: "Frame 6", id: 6 },
  { src: "/frames/avatar1.png", label: "Frame 1", id: 7 },
  { src: "/frames/avatar2.png", label: "Frame 2", id: 8 },
  { src: "/frames/avatar3.png", label: "Frame 3", id: 9 },
  { src: "/frames/avatar4.png", label: "Frame 4", id: 10 },
  { src: "/frames/avatar5.png", label: "Frame 5", id: 11 },
  { src: "/frames/avatar6.png", label: "Frame 6", id: 12 },
];

const ZoomCall = () => {
  const frameModes = { 0: "Speaker View", 1: "Gallery View" };
  const [frameMode, setFrameMode] = useState(1);

  return (
    <div>
      <div className="windowTop">
        <div className="redDot"></div>
        <div className="yellowDot"></div>
        <div className="greenDot"></div>
      </div>
      <div className="buttonContainer">
        <div style={{ marginLeft: "auto" }}>
          <button
            className="ui grey button"
            onClick={() => setFrameMode((frameMode + 1) % 2)}
          >
            <img
              className="viewIcon"
              src="/icons/view_icon.png"
              alt="view_icon"
            />
            {frameModes[(frameMode + 1) % 2]}
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          if (frameMode === 1) {
            setFrameMode(0);
          }
        }}
      >
        <FrameList frameList={frameList} frameMode={frameModes[frameMode]} />
      </div>
      <div className="windowBottom">
        <div>BOTTOM</div>
      </div>
    </div>
  );
};

export default ZoomCall;
