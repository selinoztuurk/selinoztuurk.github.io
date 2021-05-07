import React, { useState } from "react";
import FrameList from "../components/FrameList";
import "./ZoomCall.css";
import galleryViewList from "../galleryViewList";
import speakerViewList from "../speakerViewList";
import useWindowSize from "../hooks/useWindowSize";
import Colophon from "../components/Colophon";
import Chat from "../components/Chat";

const frameLists = [speakerViewList, galleryViewList];

const ZoomCall = () => {
  const frameModes = { 0: "Speaker View", 1: "Gallery View" };
  const [frameMode, setFrameMode] = useState(1);
  const [colophonOpen, setColophonOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const width = useWindowSize()[0];

  function onClickClose() {
    setColophonOpen(false);
    setChatOpen(false);
  }

  return (
    <div>
      <div style={{ paddingBottom: "6%" }}>
        <div className="upperMenuContainer">
          <div>
            {frameMode === 0 ? (
              <img
                className="viewIcon"
                src={process.env.PUBLIC_URL + "/icons/view-gallery.png"}
                onClick={() => setFrameMode((frameMode + 1) % 2)}
                alt="view_icon"
              />
            ) : (
              <img
                className="viewIcon"
                src={process.env.PUBLIC_URL + "/icons/view-speaker.png"}
                onClick={() => setFrameMode((frameMode + 1) % 2)}
                alt="view_icon"
              />
            )}
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
      </div>
      <div className="windowBottom">
        {width > 750 ? (
          <div className="first" style={{ display: "flex" }}>
            <img
              className="bottomIcon"
              src={process.env.PUBLIC_URL + "/icons/unmute.png"}
              alt="unmute"
            />
            <img
              className="bottomIcon"
              src={process.env.PUBLIC_URL + "/icons/start-video.png"}
              alt="startvideo"
            />
          </div>
        ) : null}
        {colophonOpen ? <Colophon onClickClose={onClickClose} /> : null}
        {chatOpen ? <Chat onClickClose={onClickClose} /> : null}
        <div className="second" style={{ display: "flex" }}>
          <img
            className="bottomIcon"
            src={process.env.PUBLIC_URL + "/icons/participants.png"}
            alt="participants"
            onClick={() => {
              setChatOpen(false);
              setColophonOpen(!colophonOpen);
            }}
          />

          <img
            className="bottomIcon"
            src={process.env.PUBLIC_URL + "/icons/chat.png"}
            alt="chat"
            onClick={() => {
              setColophonOpen(false);
              setChatOpen(!chatOpen);
            }}
          />
          <img
            className="bottomIcon"
            src={process.env.PUBLIC_URL + "/icons/share-screen.png"}
            alt="sharescreen"
          />

          <img
            className="bottomIcon"
            src={process.env.PUBLIC_URL + "/icons/record.png"}
            alt="record"
          />

          <img
            className="bottomIcon"
            src={process.env.PUBLIC_URL + "/icons/reactions.png"}
            alt="reactions"
          />
        </div>

        {width > 750 ? (
          <div className="third" style={{ display: "flex" }}>
            <img
              className="bottomIcon"
              src={process.env.PUBLIC_URL + "/icons/enjoy.png"}
              alt="enjoy"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ZoomCall;
