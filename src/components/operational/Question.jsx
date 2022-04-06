import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import "../../style/index.css";
import "../../style/Game.css";
import "animate.css";
import click from "../../assets/sound/click.mp3";
import next from "../../assets/sound/next.mp3";
import warning from "../../assets/sound/warning.mp3";

function Question({
  question,
  totalQuestions,
  currentQuestion,
  fiftyFifty,
  setAnswer,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function gotoNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    playAudio(click);
    setSelectedOption(null);
  }

  useEffect(() => {
    progressBar.current?.classList.remove("active");
    setTimeout(() => {
      progressBar.current?.classList.add("active");
    }, 0);
    timer.current = setTimeout(gotoNextQuestion, 12 * 1000); // move to next question after 10 seconds
    setTimeout(() => {
      playAudio(warning);
    },  8 * 1000);
    return gotoNextQuestion;
  }, [question]);

  const playAudio = (sound) => {
    new Audio(sound).play();
  };

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b> {currentQuestion} </b>
        of
        <b> {totalQuestions}</b>
      </div>
      <div className="main ">
        <p className="category"> {question?.category}</p>
        <p> {question?.rightAnswer}</p>
        <div className={"title animate__animated animate__jello"}>
          <p> {question?.questionText}</p>
        </div>
        <div className="options">
          {question?.answers.map((option, index) => {
            return (
              <div
                className={
                  index == selectedOption
                    ? "option active animate__animated animate__jello"
                    : fiftyFifty &&
                      (question?.answers.length === 4) &
                        (index == question?.rightAnswer ||
                          index == 3 - question?.rightAnswer)
                    ? "option fifty-fifty-option animate__animated animate__pulse animate__infinite"
                    : "option"
                }
                key={index}
                onClick={() => {setSelectedOption(index); playAudio(next)}}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="control">
        <button className="button button-question" onClick={gotoNextQuestion}>
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
}

export default Question;
