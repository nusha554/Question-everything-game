import { useState, useEffect } from "react";
import riddler from "../../assets/img/img12.png";
import "../../style/Animation.css";
import "animate.css";
import suprise from "../../assets/sound/suprise.mp3";

function FirstSuprise({supriseCounter, setSupriseCounter}) {
  const [wasClicked, setWasClicked] = useState(false);
  const [scoreUpdated, setScoreUpdated] = useState(false);

  useEffect(() => {
    if (wasClicked) {
      setWasClicked(true);
      setScoreUpdated(true);
      playAudio(suprise);
      setSupriseCounter(supriseCounter + 1);
    }
  }, [wasClicked]);

  const playAudio = (sound) => {
    new Audio(sound).play();
  };

  return (
    <div>
      {" "}
      {!wasClicked && (
        <img
          onClick={() => setWasClicked(true)}
          className="riddler animate__animated animate__fadeInRight animate__slower"
          src={riddler}
          alt="riddler"
        />
      )}
      {scoreUpdated && <div className="clicked-message1 animate__animated animate__zoomOut animate__slow animate__delay-1s"> You got me! </div> }
      {scoreUpdated && <div className="clicked-message1 animate__animated animate__zoomIn animate__slow animate__delay-2s"> +15 </div>}
    </div>
  );
}

export default FirstSuprise;
