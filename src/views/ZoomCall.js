import React, { useState } from "react";
import FrameList from "../components/FrameList";
import "./ZoomCall.css";
import galleryViewList from "../galleryViewList";
import speakerViewList from "../speakerViewList";
import useWindowSize from "../hooks/useWindowSize";

const frameLists = [speakerViewList, galleryViewList];

const ZoomCall = () => {
  const frameModes = { 0: "Speaker View", 1: "Gallery View" };
  const [frameMode, setFrameMode] = useState(1);
  const width = useWindowSize()[0];

  return (
    <div>
      {false ? (
        <div className="windowTop">
          <div className="redDot"></div>
          <div className="yellowDot"></div>
          <div className="greenDot"></div>
        </div>
      ) : null}
      <div className="upperMenuContainer">
        <div
          style={{
            display: "flex",
            marginTop: "5px",
            fontSize: 12,
            color: "white",
            fontWeight: 700,
          }}
        >
          {false ? (
            <div>
              <img
                className="secureIcon"
                src={process.env.PUBLIC_URL + "/icons/secure.png"}
                alt="secure"
              />
              <div className="recording"></div>
              Recording
            </div>
          ) : null}
        </div>
        <div style={{ marginLeft: "auto" }}>
          <button
            className="ui grey button"
            onClick={() => setFrameMode((frameMode + 1) % 2)}
            style={{ fontSize: 12 }}
          >
            {frameMode === 0 ? (
              <img
                className="viewIcon"
                src={process.env.PUBLIC_URL + "/icons/view-icon-gallery.png"}
                alt="view_icon"
              />
            ) : (
              <img
                className="viewIcon"
                src={process.env.PUBLIC_URL + "/icons/view-icon-speaker.png"}
                alt="view_icon"
              />
            )}
            View
          </button>
        </div>
      </div>
      <div
        onClick={(event) => {
          if (frameMode === 1 && !event.target.id.includes("logo")) {
            setFrameMode(0);
          }
        }}
      >
        <FrameList
          frameList={frameLists[frameMode]}
          frameMode={frameModes[frameMode]}
        />
      </div>
      <div className="windowBottom">
        <div className="first" style={{ display: "flex" }}>
          <img
            className="bottomIcon"
            src={process.env.PUBLIC_URL + "/icons/bottom-icon-08.png"}
            alt="unmute"
          />
          <img
            className="bottomIcon"
            src={process.env.PUBLIC_URL + "/icons/bottom-icon-09.png"}
            alt="stopvideo"
          />
        </div>
        {width > 750 ? (
          <div className="second" style={{ display: "flex" }}>
            <img
              className="bottomIcon"
              src={process.env.PUBLIC_URL + "/icons/bottom-icon-10.png"}
              alt="participants"
            />
            <img
              className="bottomIcon"
              src={process.env.PUBLIC_URL + "/icons/bottom-icon-11.png"}
              alt="chat"
            />
            <img
              className="bottomIcon"
              src={process.env.PUBLIC_URL + "/icons/bottom-icon-12.png"}
              alt="sharescreen"
            />
            <img
              className="bottomIcon"
              src={process.env.PUBLIC_URL + "/icons/bottom-icon-13.png"}
              alt="record"
            />
            <img
              className="bottomIcon"
              src={process.env.PUBLIC_URL + "/icons/bottom-icon-14.png"}
              alt="reactions"
            />
          </div>
        ) : null}
        <div className="third" style={{ display: "flex" }}>
          <img
            className="bottomIcon"
            src={process.env.PUBLIC_URL + "/icons/bottom-icon-15.png"}
            alt="enjoy"
          />
        </div>
      </div>
    </div>
  );
};

export default ZoomCall;
