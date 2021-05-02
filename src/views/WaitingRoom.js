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
          MAVA 328 Typography Studio Class welcomes you.
        </div>
        <div style={{ padding: "5px" }}>
          "Typortraits" Student Works Exhibition, Spring '21
        </div>
        <div style={{ padding: "5px", paddingTop: "35px" }}>
          Please wait. The host will let you in soon.
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
