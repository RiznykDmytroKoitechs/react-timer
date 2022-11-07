import React, { useEffect, useState } from "react";

export default function Timer() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();

  const hours = ("0" + Math.floor((time % (3600 * 60)) / 3600)).slice(-2) ;
  const minutes = ("0" + Math.floor((time % 3600) / 60)).slice(-2);
  const seconds = ("0" + time % 60).slice(-2);

  useEffect(() => {
    clearInterval(timer);
    if (isEnabled) {
      setTimer(
        setInterval(() => {
          setTime((time)=>time + 1);
        }, 1000)
      )
      
    }
    return () => {
      clearInterval(timer);
    };
  }, [isEnabled]);

  const enableTimer = () => {
    setIsEnabled(true);
  }

  const disableTimer = () => {
    setIsEnabled(false);
  }

  const resetTimer = () => {
    setTime(0);
  }

  return (
    <div className="timerDiv">
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
      <div className="buttonsDiv">
        <button
          disabled={isEnabled}
          onClick={enableTimer}
        >
          Start
        </button>
        <button
          disabled={!isEnabled}
          onClick={disableTimer}
        >
          Stop
        </button>
        <button
          className="resetButton"
          disabled={!time}
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
