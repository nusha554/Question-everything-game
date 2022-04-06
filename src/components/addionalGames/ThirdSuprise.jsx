import { useState, useEffect } from "react";
import questionMark from "../../assets/img/img7.png";
import "../../style/Animation.css";
import "animate.css";
import suprise from "../../assets/sound/suprise.mp3";

function ThirdSuprise({supriseCounter, setSupriseCounter}) {
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
     { !wasClicked  && (<img
        onClick={() => setWasClicked(true)}
        className="question-mark animate__animated  animate__infinite animate__wobble"
        src={questionMark}
        alt="questionMark"
      />)}
      {scoreUpdated && (
        <div className="clicked-message1 animate__animated animate__lightSpeedOutLeft animate__delay-1s animate__slow">
          {" "}
          That was fast!{" "}
        </div>
      )}
       {scoreUpdated && (
        <div className="clicked-message1 animate__animated animate__lightSpeedInLeft animate__delay-2s animate__slow">
          {" "}
          +15{" "}
        </div>
      )}
    </div>
  );
}

export default ThirdSuprise;
