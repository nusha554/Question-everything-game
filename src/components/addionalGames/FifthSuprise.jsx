import { useState, useEffect } from "react";
import questionMark from "../../assets/img/img11.png";
import "../../style/Animation.css";
import "animate.css";
import suprise from "../../assets/sound/suprise.mp3";

function FifthSuprise({supriseCounter, setSupriseCounter}) {
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
          className="question-mark2 animate__animated  animate__infinite animate__swing animate__fast"
          src={questionMark}
          alt="questionMark"
        />
      )}
      {scoreUpdated && (
        <div className="clicked-message4 animate__animated animate__bounceOut animate__delay-1s">
          {" "}
          Wow!{" "}
        </div>
      )}
      {scoreUpdated && (
        <div className="clicked-message4 animate__animated animate__bounceIn animate__delay-2s">
          {" "}
          +15{" "}
        </div>
      )}
    </div>
  );
}

export default FifthSuprise;
