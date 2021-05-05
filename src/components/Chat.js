import React from "react";
import "./Chat.css";

const Chat = ({ onClickClose }) => {
  return (
    <div className="chatBoxContainer" id="container">
      <div className="tab">
        <div className="closeButton" onClick={() => onClickClose()}></div>
      </div>
      <div className="chatRow">
        <div>
          typortraits to <span style={{ color: "#FF6901" }}>Everyone</span>
        </div>
        <div>08:30AM</div>
      </div>

      <div className="chatBox">
        <div className="regularType">
          after a year of intense virtual gazing, we, as the mava 328 typography
          studio class, zoomed in on our professors’ faces and explored how we
          can depict them with type. <br />
          <br /> the result is "typortraits": an exhibition, a labor of love and
          the culmination of all that we have learned.
          <br />
          <br /> enjoy seeing the many beloved faces of our faculty in a
          different light! <br />
          <br />
          we hope to continue our exhibition next year, on our campus and
          face-to-face.
        </div>
      </div>
      <div className="chatBox">
        <div className="boldType">objective of the project</div>
        <div className="regularType">
          . exploring type as an independent design element
          <br />. observing various visual expressions of type via typographic
          installations
        </div>
      </div>
    </div>
  );
};

export default Chat;
