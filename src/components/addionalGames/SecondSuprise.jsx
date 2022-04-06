import { useState, useEffect } from "react";
import cube from "../../assets/img/img10.png";
import "../../style/Animation.css";
import "animate.css";
import suprise from "../../assets/sound/suprise.mp3";

function SecondSuprise({ supriseCounter, setSupriseCounter }) {
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
          className="cube animate__animated  animate__rotateIn animate__infinite "
          src={cube}
          alt="cube"
        />
      )}
      {scoreUpdated && (
        <div className="clicked-message2 animate__animated animate__fadeOut animate__slower	animate__delay-1s">
          {" "}
          That <br/>was  <br/> sharp! {" "}
        </div>
      )}
      {scoreUpdated && (
        <div className="clicked-message2 animate__animated animate__fadeIn animate__slow animate__delay-2s">
          {" "}
          +15{" "}
        </div>
      )}
    </div>
  );
}

export default SecondSuprise;
