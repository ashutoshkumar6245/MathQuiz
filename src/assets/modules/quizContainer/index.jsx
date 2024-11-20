import React, { useState, useEffect } from "react";
import QuestionComponent from "../components/questionComponent/QuestionComponent";
import AnswerOptions from "../components/answerOptions/AnswerOptions";
import ScoreTracker from "../components/ScoreTracker";
import Timer from "../components/Timer";
import Result from "../../../components/result";
import { useParams } from "react-router-dom";

const QuizContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [open, setOpen] = useState(false);
  const {id}=useParams();

  useEffect(() => {
    generateQuestions(id);
  }, []);

 
 const generateQuestions = (id) => {
    const questions = [];
    const min = id === "1" ? 0 : id === "2" ? 20 : 100;
    const max = id === "1" ? 10 : id === "2" ? 100 : 290;
    for (let i = 0; i < 10; i++) {
      const question = {
        type: getRandomQuestionType(),
        num1: Math.floor(Math.random() * (max - min) + min),
        num2: Math.floor(Math.random() * (max - min) + min),
      };
      questions.push(question);
    }
    setQuestions(questions);
  };

  const getRandomQuestionType = () => {
    const questionTypes = [
      "addition",
      "subtraction",
      "multiplication",
      "division",
    ];
    return questionTypes[Math.floor(Math.random() * questionTypes.length)];
  };

  const handleUserAnswer = (answer) => {
    console.log(typeof answer, "user answerrrrrrrrrrrrrrrr");
    setUserAnswer(answer);
    const correctAnswer = getCorrectAnswer();
    console.log(correctAnswer, "user correctAnswer");
    console.log(userAnswer, "user answer");
    if (answer === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    localStorage.setItem("score", score);
    nextQuestion();
  };
  console.log(userAnswer, "user ANswer");
  const getCorrectAnswer = () => {
    const question = questions[currentQuestion];
    switch (question.type) {
      case "addition":
        return question.num1 + question.num2;
      case "subtraction":
        return question.num1 - question.num2;
      case "multiplication":
        return question.num1 * question.num2;
      case "division":
        return question.num1 / question.num2;
      default:
        return 0;
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer(0);
      setTimeRemaining(30);
    } else {
      // display final score
      setOpen(true);
    }
  };

  const handleRestart = () => {
    setOpen(!open);
    setQuestions([]);
    setCurrentQuestion(0);
    setUserAnswer(0);
    setScore(0);
    setTimeRemaining(30);
    generateQuestions(id);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex justify-center">
      <div className="lg:w-11/12 w-full lg:p-16 p-0 border lg:h-screen">
      <div className=" flex justify-between border-b-2 border-red-400 ">
      <h2 className=" lg:text-3xl text-sm">Your {open ? "Score" : "Question"} is......</h2>
      {!open && <Timer timeRemaining={timeRemaining} handleRestart={handleRestart} />}

      </div>
       
        <div className=" flex justify-center w-full lg:pt-10 p-2">
          <div className=" min-h-max lg:p-10 border lg:w-3/12 w-full">
            {open ? (
              <Result score={score} handleRestart={handleRestart}  />
            ) : (
              <>
                <QuestionComponent question={questions[currentQuestion]} />
                {questions[currentQuestion] && (
                  <AnswerOptions
                    question={questions[currentQuestion]}
                    handleUserAnswer={handleUserAnswer}
                  />
                )}
              </>
            )}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default QuizContainer;
