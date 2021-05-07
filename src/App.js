import React, { useState, useEffect } from "react";
import WaitingRoom from "./views/WaitingRoom";
import ZoomCall from "./views/ZoomCall";

const App = () => {
  const [waitingRoomActive, setWaitingRoomActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaitingRoomActive(false);
    }, 4000);
  });

  return (
    <div style={{ backgroundColor: "#101010" }}>
      {waitingRoomActive ? <WaitingRoom /> : <ZoomCall />}
    </div>
  );
};

export default App;
