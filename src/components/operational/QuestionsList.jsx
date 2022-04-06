import React from "react";
import { useState, useEffect } from "react";
import "../../style/Game.css";

function QuestionsList({ setQuestionList }) {
  let i = 0;

  useEffect(() => {
    getQuizQuestions();
  }, []);

  async function getQuizQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=100");
    const data = await response.json();
    if (data) {
      handleQuestionList(data.results);
    }
  }

  const handleQuestionList = (rawList) => {
    let tempList = [];

    if (!rawList) return;

    for (let i = 0; i < 100; i++) {
      let question = {
        category: "",
        questionText: "",
        answers: [],
        rightAnswer: 0,
      };

      //Skip questions with & character
      if (rawList[i].question.includes("&")) continue;

      if (tempList.length === 20) break;

      question.category = rawList[i].category;
      question.questionText = rawList[i].question;
      let rightIndex = Math.floor(
        Math.random() * (rawList[i].incorrect_answers.length + 1)
      );
      let answers = [];
      answers = rawList[i].incorrect_answers;
      answers.splice(rightIndex, 0, rawList[i].correct_answer);
      question.answers = answers;
      question.rightAnswer = rightIndex;
      tempList.push(question);
    }

    setQuestionList(tempList.map((item) => ({ ...item })));
  };

  return <div></div>;
}

export default QuestionsList;
