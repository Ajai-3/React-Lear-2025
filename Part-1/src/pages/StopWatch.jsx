import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 100);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div>
      StopWatch
      <p>{count}</p>
      <div className="flex gap-6">
        <button onClick={() => setIsRunning(true)}>start</button>
        <button onClick={() => setIsRunning(false)}>stop</button>
        <button onClick={() => setIsRunning(true)}>resume</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
