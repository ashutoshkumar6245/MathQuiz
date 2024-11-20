import React from 'react';

const AnswerOptions = ({ question, handleUserAnswer }) => {
  if (!question) {
    return <div>Loading...</div>;
  }

  const options = [
    { value: question.num1 + question.num2 },
    { value: question.num1 - question.num2 },
    { value: question.num1 * question.num2 },
    { value: question.num1 / question.num2 },
  ];

  return (
    <div className="flex flex-col">
      <h2 className=' lg:text-lg text-sm pb-4' >
        Sellect the correct option
      </h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleUserAnswer(option.value)}
          className=" bg-lime-400	 hover:bg-lime-700	 text-white w-full  font-bold py-2 px-4 rounded mb-2"
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};

export default AnswerOptions;