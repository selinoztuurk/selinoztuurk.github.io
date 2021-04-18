import React, { useState } from "react";
import Frame from "./Frame";
import "./FrameList.css";

const FrameList = ({ frameList, frameMode }) => {
  const [focusedFrame, setFocusedFrame] = useState(frameList[0]);

  function onFrameSelect(id) {
    setFocusedFrame(frameList[id - 1]);
  }

  /*function randomlyPickedFrameList(n) {
    var newFrameList = [];
    var a = Array.from(Array(n).keys());

    function shuffle(o) {
      for (
        var j, x, i = o.length;
        i;
        j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
      );
      return o;
    }

    var randomIndices = shuffle(a);

    for (var i = 0; i < randomIndices.length; i++) {
      newFrameList = [
        ...newFrameList,
        frameList[randomIndices[i % frameList.length]],
      ];
    }
    console.log(newFrameList);
    return newFrameList;
  }*/

  function sixFrameList(i) {
    var newFrameList = [];
    for (var j = 0; j < 6; j++) {
      newFrameList = [...newFrameList, frameList[(i + j) % frameList.length]];
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

  const renderedSpeakerFrameList = sixFrameList(focusedFrame.id).map(
    (frame) => {
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
    }
  );

  const FocusedFrame = ({ focusedFrame }) => {
    return (
      <div className="ui container focusedFrameContainer">
        <div style={{ margin: "auto" }}>
          <img
            className="focusedFrameImage"
            src={focusedFrame.src}
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
          <div className="ui doubling six column grid container">
            {renderedSpeakerFrameList}
          </div>

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
