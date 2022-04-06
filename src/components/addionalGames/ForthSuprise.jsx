import { useState, useEffect } from "react";
import hat from "../../assets/img/img13.png";
import "../../style/Animation.css";
import "animate.css";
import suprise from "../../assets/sound/suprise.mp3";

function ForthSuprise({supriseCounter, setSupriseCounter}) {
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
          className="hat animate__animated  animate__infinite animate__rubberBand"
          src={hat}
          alt="hat"
        />
      )}
      {scoreUpdated && (
        <div className="clicked-message5 animate__animated animate__zoomOutUp animate__slow animate__delay-1s">
          {" "}
          Genies!{" "}
        </div>
      )}
      {scoreUpdated && (
        <div className="clicked-message5 animate__animated animate__zoomInUp animate__slow animate__delay-2s">
          {" "}
          +15{" "}
        </div>
      )}
    </div>
  );
}

export default ForthSuprise;
