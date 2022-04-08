import React from "react";
import "../../style/index.css";
import "../../style/Game.css";
import "../../style/Animation.css";
import Typewriter from "react-typewriter-effect";
import "animate.css";
import click from "../../assets/sound/click.mp3";

function JoinQuizGame({ setPlayerName, start }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    playAudio(click);
    start();
    setPlayerName(event.target.playerName.value);
    
  };

  const playAudio = (sound) => {
    new Audio(sound).play();
  };


  return (
    <div className="join-screen">
      <h2 className="animate__animated animate__zoomIn animate__repeat-1	animate__delay-1s animate__slow">
        {" "}
        Let's see what you've got, shall we?
      </h2>
      <Typewriter
        textStyle={{
          fontWeight: 500,
          fontSize: "1.2em",
        }}
        startDelay={4000}
        cursorColor="#3F3D56"
        multiText={[
          "You'll have limited time.",
          "To answer correctly each question on varius topics.",
          "Find secret extra games...",
          "Now, how shall I call you ?",
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        hideCursorAfterText={true}
      />
      <form className="join-form" onSubmit={handleSubmit}>
        <input
          required
          type="text "
          name="playerName"
          className="text animate__animated animate__zoomIn animate__delay-5s"
        />
        <input
          type="submit"
          className="button btn-submit animate__animated animate__zoomIn animate__delay-5s"
          value="Let's go!"
        />
      </form>
    </div>
  );
}

export default JoinQuizGame;
