import React, { useState } from "react";
import Frame from "./Frame";
import "./FrameList.css";
import galleryViewList from "../galleryViewList.js";
import speakerViewList from "../speakerViewList.js";
import useWindowSize from "../hooks/useWindowSize";

const FrameList = ({ frameList, frameMode }) => {
  const [focusedFrame, setFocusedFrame] = useState(speakerViewList[0]);

  const width = useWindowSize()[0];

  const speakerUpperList = galleryViewList.filter(
    (item) => !item.id.includes("logo")
  );

  function onFrameSelect(id) {
    var result = speakerViewList.find((item) => item.id === id);
    setFocusedFrame(result);
  }

  function sixFrameList(i) {
    var newFrameList = [];
    for (var j = -3; j < 4; j++) {
      if (j === 0) continue;
      newFrameList = [
        ...newFrameList,
        speakerUpperList[
          (i + j + speakerUpperList.length) % speakerUpperList.length
        ],
      ];
    }
    return newFrameList;
  }

  function fourFrameList(i) {
    var newFrameList = [];
    for (var j = -2; j < 3; j++) {
      if (j === 0) continue;
      newFrameList = [
        ...newFrameList,
        speakerUpperList[
          (i + j + speakerUpperList.length) % speakerUpperList.length
        ],
      ];
    }
    return newFrameList;
  }

  const renderedGalleryFrameList = frameList.map((frame) => {
    return (
      <div className="column">
        <Frame
          onFrameSelect={onFrameSelect}
          key={frame.id}
          src={frame.src}
          alt={frame.alt}
          id={frame.id}
        />
      </div>
    );
  });

  const renderedSixSpeakerFrameList = sixFrameList(
    speakerViewList.findIndex((item) => item.id === focusedFrame.id)
  ).map((frame) => {
    return (
      <div className="column">
        <Frame
          onFrameSelect={onFrameSelect}
          key={frame.id}
          src={frame.src}
          alt={frame.alt}
          id={frame.id}
        />
      </div>
    );
  });

  const renderedFourSpeakerFrameList = fourFrameList(
    speakerViewList.findIndex((item) => item.id === focusedFrame.id)
  ).map((frame) => {
    return (
      <div className="column">
        <Frame
          onFrameSelect={onFrameSelect}
          key={frame.id}
          src={frame.src}
          alt={frame.alt}
          id={frame.id}
        />
      </div>
    );
  });

  const FocusedFrame = ({ focusedFrame }) => {
    return (
      <div className="ui container focusedFrameContainer">
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <img
            className="focusedFrameImage"
            src={process.env.PUBLIC_URL + focusedFrame.src}
            alt={focusedFrame.alt}
            id={focusedFrame.id}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {frameMode === "Speaker View" ? (
        <div>
          {width > 600 ? (
            <div
              className="ui eight column grid container"
              id="speakerSixColumns"
            >
              <div>
                <img
                  className="arrowIcon"
                  src={process.env.PUBLIC_URL + "/icons/arrow-left.png"}
                  alt="left"
                  onClick={() =>
                    setFocusedFrame(
                      speakerViewList[
                        (speakerViewList.findIndex(
                          (item) => item.id === focusedFrame.id
                        ) -
                          1 +
                          speakerViewList.length) %
                          speakerViewList.length
                      ]
                    )
                  }
                />
              </div>
              {renderedSixSpeakerFrameList}
              <div>
                <img
                  className="arrowIcon"
                  src={process.env.PUBLIC_URL + "/icons/arrow-right.png"}
                  alt="right"
                  onClick={() =>
                    setFocusedFrame(
                      speakerViewList[
                        (speakerViewList.findIndex(
                          (item) => item.id === focusedFrame.id
                        ) +
                          1 +
                          speakerViewList.length) %
                          speakerViewList.length
                      ]
                    )
                  }
                />
              </div>
            </div>
          ) : (
            <div
              className="ui six column grid container"
              id="speakerFourColumns"
            >
              <div>
                <img
                  className="arrowIcon"
                  src={process.env.PUBLIC_URL + "/icons/arrow-left.png"}
                  alt="left"
                  onClick={() =>
                    setFocusedFrame(
                      speakerViewList[
                        (speakerViewList.findIndex(
                          (item) => item.id === focusedFrame.id
                        ) -
                          1 +
                          speakerViewList.length) %
                          speakerViewList.length
                      ]
                    )
                  }
                />
              </div>
              {renderedFourSpeakerFrameList}
              <div>
                <img
                  className="arrowIcon"
                  src={process.env.PUBLIC_URL + "/icons/arrow-right.png"}
                  alt="right"
                  onClick={() =>
                    setFocusedFrame(
                      speakerViewList[
                        (speakerViewList.findIndex(
                          (item) => item.id === focusedFrame.id
                        ) +
                          1 +
                          speakerViewList.length) %
                          speakerViewList.length
                      ]
                    )
                  }
                />
              </div>
            </div>
          )}

          <FocusedFrame focusedFrame={focusedFrame} />
        </div>
      ) : (
        <div className="ui doubling seven column grid container">
          {renderedGalleryFrameList}
        </div>
      )}
    </div>
  );
};

export default FrameList;
