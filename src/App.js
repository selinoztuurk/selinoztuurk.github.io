import React, { useState, useEffect } from "react";
import WaitingRoom from "./views/WaitingRoom";
import ZoomCall from "./views/ZoomCall";

const App = () => {
  const [waitingRoomActive, setWaitingRoomActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaitingRoomActive(false);
    }, 5000);
  });

  return (
    <div style={{ backgroundColor: "black" }}>
      {waitingRoomActive ? <WaitingRoom /> : <ZoomCall />}
    </div>
  );
};

export default App;
