import React, { useState, useEffect } from 'react';

const Timer = ({ timeRemaining,handleRestart }) => {
  const [time, setTime] = useState(timeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      setTime(timeRemaining);
      handleRestart();
      alert('Time is up!');
    }
  }, [time]);

  return (
    <div>
      <p>Time remaining: {time} seconds</p>
    </div>
  );
};

export default Timer;