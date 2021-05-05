import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const WaitingRoom = () => {
  const width = useWindowSize()[0];

  return (
    <div className="ui container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          fontSize: "1rem",
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "90%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/typortraits-logo.png"}
          alt="logo"
          style={{ width: `${width < 600 ? "90%" : "40%"}`, height: "auto" }}
        />
        <div style={{ padding: "5px" }}>
          Please wait, we will soon let you in to
        </div>
        <div style={{ padding: "5px" }}>
          the Students Works Exhibition "Typortraits".
        </div>
        <div style={{ padding: "5px", paddingTop: "35px" }}>
          MAVA328 Typography Studio
        </div>
        <div
          className="ui active centered inline loader"
          style={{ marginTop: "40px" }}
        ></div>
      </div>
    </div>
  );
};

export default WaitingRoom;
