import React from 'react';
import '../../quizContainer/style.css'

// QuestionComponent component
const QuestionComponent = ({ question }) => {
  if (!question) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="">
      <h2 className=" lg:text-2xl text-sm pb-4">
       What is {question.num1} {getOperator(question.type)} {question.num2}?
      </h2>
    </div>
  );
};

// getOperator function
const getOperator = (type) => {
  switch (type) {
    case 'addition':
      return '+';
    case 'subtraction':
      return '-';
    case 'multiplication':
      return '*';
    case 'division':
      return '/';
    default:
      return '';
  }
};

export default QuestionComponent;