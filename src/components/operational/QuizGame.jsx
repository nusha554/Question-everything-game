import { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import QuestionsList from "./QuestionsList";
import Loader from "./Loader";
import FirstSuprise from "../addionalGames/FirstSuprise"
import SecondSuprise from "../addionalGames/SecondSuprise";
import ThirdSuprise from "../addionalGames/ThirdSuprise";
import ForthSuprise from "../addionalGames/ForthSuprise";
import FifthSuprise from "../addionalGames/FifthSuprise";
import FiftyFifty from "./FiftyFifty";

import "../../style/Game.css";
import "animate.css";

const LENGTH = 2;
const firstSupriseIndex = 1;
const secondSupriseIndex = 4;
const thirdSupriseIndex = 7;
const forthSupriseIndex = 12;
const fifthSupriseIndex = 15;
function QuizGame({ playerName, retry, extraCounter, setExtraCounter}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState(new Array(LENGTH));
  const [markedAnswers, setMarkedAnswers] = useState(new Array(LENGTH));
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [fiftyFifty, setFiftyFifty] = useState(false);
  const [fiftyFiftyCounter, setFiftyFiftyCounter] = useState(0);
  const [firstSupriseOn, setFirstSupriseOn] = useState(false);
  const [secondSupriseOn, setSecondSupriseOn] = useState(false);
  const [thirdSupriseOn, setThirdSupriseOn] = useState(false);
  const [forthSupriseOn, setForthSupriseOn] = useState(false);
  const [fifthSupriseOn, setFifthSupriseOn] = useState(false);
  const [supriseCounter, setSupriseCounter] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3600);
  }, []);

  useEffect(() => {
    setFiftyFifty(false);
    setFirstSupriseOn(false);
    setSecondSupriseOn(false);
    setThirdSupriseOn(false);
    setForthSupriseOn(false);
    setFifthSupriseOn(false);

    if (currentQuestionIndex === LENGTH) {
      setIsQuizOver(true);
    } else if (currentQuestionIndex === firstSupriseIndex) {
      setFirstSupriseOn(true);
    } else if (currentQuestionIndex === secondSupriseIndex) {
      setSecondSupriseOn(true);
    } else if (currentQuestionIndex === thirdSupriseIndex) {
      setThirdSupriseOn(true);
    } else if (currentQuestionIndex === forthSupriseIndex) {
      setForthSupriseOn(true);
    } else if (currentQuestionIndex === fifthSupriseIndex) {
      setFifthSupriseOn(true);
    }
  }, [currentQuestionIndex]);

  function calculateResult() {
    let correct = 0;
    let score = 0;
    questionList.forEach((question, index) => {
      if (question.answers[question.rightAnswer] == markedAnswers[index]) {
        correct++;
        score += 10;
      }
    });
    score -= fiftyFiftyCounter * 5;
    score += supriseCounter * 15;
    score += extraCounter * 20;
    return {
      total: LENGTH,
      correct: correct,
      score: score,
    };
  }

  return (
    <div className="quiz-screen">
      <QuestionsList setQuestionList={setQuestionList} />
      {isQuizOver ? (
        <Result
          playerName={playerName}
          result={calculateResult()}
          retry={retry}
        />
      ) : !isLoading && !questionList.includes(undefined) ? (
        <div className="">
          <FiftyFifty
            setFiftyFifty={setFiftyFifty}
            fiftyFiftyCounter={fiftyFiftyCounter}
            setFiftyFiftyCounter={setFiftyFiftyCounter}
          />
          <Question
            question={questionList[currentQuestionIndex]}
            totalQuestions={LENGTH}
            currentQuestion={currentQuestionIndex + 1}
            fiftyFifty={fiftyFifty}
            setAnswer={(index) => {
              setMarkedAnswers((arr) => {
                let newArr = [...arr];
                newArr[currentQuestionIndex - 1] =
                  questionList[currentQuestionIndex - 1]?.answers[index];
 
                return newArr;
              });
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            }}
          />
        </div>
      ) : (
        <Loader playerName={playerName} />
      )}
      {firstSupriseOn && <FirstSuprise supriseCounter={supriseCounter} setSupriseCounter={setSupriseCounter} />}
      {secondSupriseOn && <SecondSuprise supriseCounter={supriseCounter} setSupriseCounter={setSupriseCounter} />}
      {thirdSupriseOn && <ThirdSuprise supriseCounter={supriseCounter} setSupriseCounter={setSupriseCounter} />}
      {forthSupriseOn && <ForthSuprise supriseCounter={supriseCounter} setSupriseCounter={setSupriseCounter} />}
      {fifthSupriseOn && <FifthSuprise supriseCounter={supriseCounter} setSupriseCounter={setSupriseCounter}/>}
    </div>
  );
}

export default QuizGame;
