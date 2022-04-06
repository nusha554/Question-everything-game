import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "../../style/Game.css";
import "../../style/index.css";
import "../../style/Result.css";
import "animate.css";
import failure from "../../assets/sound/failure.mp3";
import win from "../../assets/sound/win.mp3";
import click from "../../assets/sound/click.mp3";

function Result({ playerName, result, retry }) {
  const [low, setLow] = useState(false);
  const [medium, setMedium] = useState(false);
  const [high, setHigh] = useState(false);
  const [lowLimit, highLimit] = [7, 13];
  const [width, height] = [700, 500];

  useEffect(() => {
    if (result.correct <= lowLimit) {
      setLow(true);
      setMedium(false);
      setHigh(false);
    } else if (result.correct <= highLimit) {
      setLow(false);
      setMedium(true);
      setHigh(false);
    } else {
      setLow(false);
      setMedium(false);
      setHigh(true);
    }
  }, []);

  
  useEffect(() => {
    playAudio(click);
  });


  const playAudio = (sound) => {
    new Audio(sound).play();
  };

  return (
    <div className="result ">
      {(medium || high) && <Confetti width={width} height={height} />}
      <h2 className="score animate__animated animate__backInDown animate__slow ">
        {" "}
        Your score is {result.score < 0 ? 0 : result.score} {" "}
      </h2>
      {low && playAudio(failure)}
      {low && (
        <p className="result-text animate__animated animate__fadeIn animate__delay-3s	animate__slower">
          <font size="6">How disappointing, {playerName} !</font>
          <br />
          <br />
          You were right <font color="FireBrick">{result.correct} </font>
          times out of <font color="BlueViolet">{result.total}</font> .
        </p>
      )}
      {(medium || high) && playAudio(win)}
      {medium && (
        <p className="result-text animate__animated animate__fadeIn animate__delay-3s animate__slower">
          <font size="6">
            Not so bad, <font size="Orange">{playerName}</font>!
          </font>
          <br /> <br />
          You were right <font color="Orange"> {result.correct}</font> times out
          of <font color="BlueViolet">{result.total}</font> .
        </p>
      )}
      {high && (
        <p className="result-text animate__animated animate__fadeIn animate__delay-3s animate__slower">
          <font size="6">You've surprised me, {playerName}!</font>
          <br /> <br />
          You were right <font color="ForestGreen ">
            {" "}
            {result.correct}
          </font>{" "}
          times out of <font color="BlueViolet">{result.total}</font> .
        </p>
      )}
      <button
        className="button button-retry animate__animated animate__backInDown animate__delay-4s animate__slower"
        onClick={retry}
      >
        {" "}
        Practice makes perfect.{" "}
      </button>
    </div>
  );
}

export default Result;
