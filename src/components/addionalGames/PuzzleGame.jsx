import { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "../../style/ExtraGames.css";
import "../../style/index.css";
import "../../style/Game.css";
import click from "../../assets/sound/click.mp3";
import win from "../../assets/sound/win.mp3";

function PuzzleGame({setStartPuzzle, setExtraCounter}) {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    setStartPuzzle(false);
    playAudio(click);
  };

  const playAudio = (sound) => {
    new Audio(sound).play();
  };

  return (
    <div>
      <JigsawPuzzle
        className="puzzle-game"
        imageSrc="https://www.slashfilm.com/img/gallery/the-best-riddler-comics-of-all-time/intro-1646664169.webp"
        rows={3}
        columns={3}
        onSolved={() => {setDone(true);  setExtraCounter(prev => prev + 1);}}
      />
      <button className="button btn-done btn-puzzle" onClick={handleClick}>
        {" "}
        Done here?{" "}
      </button>
      {done && playAudio(win)}
      {done && (<span className="message animate__animated animate__delay-1s	animate__fadeOut"> +20 </span>)}
    </div>
  );
}

export default PuzzleGame;
