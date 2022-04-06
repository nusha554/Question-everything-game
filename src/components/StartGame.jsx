import { useState, useEffect } from "react";
import "../style/Game.css";
import QuizGame from "./operational/QuizGame";
import JoinQuizGame from ".//operational/JoinQuizGame";
import TryMe from "./addionalGames/TryMe";
import ExtraGame from "./addionalGames/ExtraGame";
import PuzzleGame from "./addionalGames/PuzzleGame";
import PlayMe from "./addionalGames/PlayMe";
import "../style/Game.css";
import "../style/index.css";
import "../style/Animation.css";
import riddler from "../assets/img/riddler2.gif";
import laughSound from "../assets/sound/laugh.mp3";
import extraSound from "../assets/sound/extra.mp3";

function StartGame() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [startExtra, setStartExtra] = useState(false);
  const [startPuzzle, setStartPuzzle] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [extraCounter, setExtraCounter] = useState(0);

  useEffect(() => {
    if (!isQuizStarted) {
      setExtraCounter(0);
    }
  }, [isQuizStarted]);

  const playAudio = (sound) => {
    new Audio(sound).play();
  };

  return (
    <>
      <h1 className="header"> Question Everything Game </h1>
      <img className="riddler-gif" src={riddler} alt="loading..." />
      <div className="quiz-container">
        {isQuizStarted && playAudio(laughSound)}
        {startExtra && playAudio(extraSound)}
        {startPuzzle && playAudio(extraSound)}
        {!startPuzzle ? (
          !startExtra ? (
            isQuizStarted ? (
              <QuizGame
                playerName={playerName}
                retry={() => {
                  setIsQuizStarted(false);
                  playAudio(extraSound);
                }}
                extraCounter={extraCounter}
                setExtraCounter={setExtraCounter}
              />
            ) : (
              <div>
                <TryMe setStartExtra={setStartExtra} />
                <PlayMe setStartPuzzle={setStartPuzzle} />
                <JoinQuizGame
                  setPlayerName={setPlayerName}
                  start={() => setIsQuizStarted(true)}
                />
              </div>
            )
          ) : (
            <ExtraGame
              extraCounter={extraCounter}
              setExtraCounter={setExtraCounter}
              setStartExtra={setStartExtra}
            />
          )
        ) : (
          <PuzzleGame setStartPuzzle={setStartPuzzle} setExtraCounter={setExtraCounter}/>
        )}
      </div>
    </>
  );
}

export default StartGame;
