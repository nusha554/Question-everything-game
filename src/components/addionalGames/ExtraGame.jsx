import React from "react";
import CardsMemoryGame from "./CardsMemoryGame"
import "../../style/ExtraGames.css";
import "../../style/index.css";
import "../../style/Game.css";
import click from "../../assets/sound/click.mp3";

function ExtraGame({setExtraCounter, setStartExtra}) {

    const handleClick = () => {
        setStartExtra(false);
        playAudio(click);
    }

    const playAudio = (sound) => {
      new Audio(sound).play();
    };
    
  return (
    <div className="MemoryGame">
      <h2 className="header-small"> How is your memory ?</h2>
      <CardsMemoryGame setExtraCounter={setExtraCounter}/>
      <button className="button btn-done" onClick={handleClick} > Done here? </button> 
    </div>
  );
}

export default ExtraGame;
