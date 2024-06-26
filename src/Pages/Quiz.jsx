import React, { useState } from "react";
import Header from "../Components/Header";
import { Navigate, useNavigate } from "react-router-dom";

const Quiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const questions = [
    {
      text: "What does HTML stand for?",
      options: [
        { id: 0, text: "Home tool markup language", isCorrect: false },
        { id: 1, text: "hyper text language", isCorrect: false },
        {
          id: 2,
          text: "Hyper link and text markup language",
          isCorrect: false,
        },
        { id: 3, text: "Hyper text markup language", isCorrect: true },
      ],
    },
    {
      text: "Who is making the Web standards?",
      options: [
        { id: 0, text: "the world wide web consortium", isCorrect: true },
        { id: 1, text: "firefox", isCorrect: false },
        { id: 2, text: "google", isCorrect: false },
        { id: 3, text: "mozilla", isCorrect: false },
      ],
    },
    {
      text: "Choose the correct HTML element for the largest heading:",
      options: [
        { id: 0, text: "h1", isCorrect: true },
        { id: 1, text: "heading", isCorrect: false },
        { id: 2, text: "head", isCorrect: false },
        { id: 3, text: "h6", isCorrect: false },
      ],
    },
    {
      text: "What is the correct HTML element for inserting a line break?",
      options: [
        { id: 0, text: "<break>", isCorrect: false },
        { id: 1, text: "<br>", isCorrect: true },
        { id: 2, text: "<lb>", isCorrect: false },
        { id: 3, text: "br", isCorrect: false },
      ],
    },
    {
      text: "What is the correct HTML for adding a background color?",
      options: [
        { id: 0, text: "<background yellow>", isCorrect: false },
        {
          id: 1,
          text: "<body style='background-color:yellow'>",
          isCorrect: true,
        },
        { id: 2, text: "<body bg='yellow'>", isCorrect: true },
        { id: 3, text: "style='background:yellow'", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
   <div>
 <Header />
     <div className="m-5">
      
      <div className="App">
        <h1 className="m-2 fw-bold fs-1">Quiz</h1>

        <h2 className="m-3 fs-5">Score: {score}</h2>

        {showResults ? (
          <div className="final-results ">
            <h1 className="m-2 fs-2 fw-bold">Results</h1>
            <h2 className="fw-bold">
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button className="my-4"onClick={() => restartGame()}>Restart game</button>
            <button className="my-4 mx-2"onClick={() =>navigate("/Viewcourse")}>back to course</button>
          </div>
        ) : (
          <div className="question-card ">
            <h2 className="m-2"> 
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li className="quiz-li"
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
   </div>
   
  );
};

export default Quiz;
