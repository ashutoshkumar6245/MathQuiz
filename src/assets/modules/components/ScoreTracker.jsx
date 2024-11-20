import React from 'react';

const ScoreTracker = ({ score }) => {

  return (
    <div>
      <p className='text-2xl' style={{ color: score < 0 ? 'red' : 'green' }} >Score: {score}</p>
    </div>
  );
};

export default ScoreTracker;