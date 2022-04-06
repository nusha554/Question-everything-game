import { useState, useEffect } from "react";
import "animate.css";
import fiftyFiftyAudio from "../../assets/sound/50-50.mp3";

function FiftyFifty({
  setFiftyFifty,
  fiftyFiftyCounter,
  setFiftyFiftyCounter,
}) {
  const playAudio = () => {
    new Audio(fiftyFiftyAudio).play();
  };

  return (
    <div
      className="fifty-fifty"
      tabIndex="1"
      onClick={() => {
        setFiftyFifty(true);
        setFiftyFiftyCounter(fiftyFiftyCounter + 1);
        playAudio();
      }}
    >
      {" "}
      50 / 50
    </div>
  );
}

export default FiftyFifty;
