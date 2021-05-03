import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const WaitingRoom = () => {
  const width = useWindowSize()[0];

  return (
    <div
      className="ui container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        fontSize: "1rem",
      }}
    >
      <div style={{ marginTop: `${width < 600 ? "50%" : "15%"}` }}>
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/typortraits-logo.png"}
          alt="logo"
          style={{ width: `${width < 600 ? "80%" : "30%"}`, height: "auto" }}
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
