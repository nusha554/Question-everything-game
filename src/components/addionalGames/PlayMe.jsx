import React from "react";
import "../../style/Animation.css";
import puzzle from "../../assets/img/puzzle.png";

function PlayMe({ setStartPuzzle }) {

    const handleClick = () => {
        setStartPuzzle(true);
      }

  return (
    <img
    onClick={handleClick}
          className="puzzle-img animate__animated animate__heartBeat animate__slow animate__infinite"
          src={puzzle}
          alt="puzzle"
        />
  );
}

export default PlayMe;


