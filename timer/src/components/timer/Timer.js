import React, { useEffect, useState } from "react";

export default function Timer() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [time, setTime] = useState(0);

  const hours = Math.floor((time % (3600 * 60)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isEnabled) {
      const interval = setTimeout(() => {
        setTime(time + 1);
      }, 5);
      return () => {
        clearTimeout(interval);
      };
    }
  }, [isEnabled, time]);

  return (
    <div className="timerDiv">
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
      <div className="buttonsDiv">
        <button
          disabled={isEnabled}
          onClick={() => {
            setIsEnabled(true);
          }}
        >
          Start
        </button>
        <button
          disabled={!isEnabled}
          onClick={() => {
            setIsEnabled(false);
          }}
        >
          Stop
        </button>
        <button
          className="resetButton"
          disabled={!time}
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
