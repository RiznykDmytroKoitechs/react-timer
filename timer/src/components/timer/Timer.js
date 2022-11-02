import React, { useEffect, useRef } from "react";

export default function Timer() {
  const timerValRef = useRef(0);
  const textRef = useRef();
  const timerRef = useRef(null);
  const startButtonRef = useRef();
  const stopButtonRef = useRef();
  const resetButtonRef = useRef();

  useEffect(() => {
    stopButtonRef.current.disabled = true;
    resetButtonRef.current.disabled = true;
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.curren);
    startButtonRef.current.disabled = true;
    stopButtonRef.current.disabled = false;
    timerRef.current = setInterval(() => {
      timerValRef.current += 1;
      const hours = Math.floor((timerValRef.current % (3600 * 60)) / 3600);
      const minutes = Math.floor((timerValRef.current % 3600) / 60);
      const seconds = timerValRef.current % 60;
      textRef.current.textContent = `${("0" + hours).slice(-2)}:${(
        "0" + minutes
      ).slice(-2)}:${("0" + seconds).slice(-2)}`;
      resetButtonRef.current.disabled = false;
    }, 1000);
  };

  const stopTimer = () => {
    startButtonRef.current.disabled = false;
    stopButtonRef.current.disabled = true;
    clearInterval(timerRef.current);
    console.log(timerRef.current);
  };

  const resetTimer = () => {
    resetButtonRef.current.disabled = true;
    timerValRef.current = 0;
    textRef.current.textContent = "00:00:00";
  };

  return (
    <div className="timerDiv">
      <h1 ref={textRef}>00:00:00</h1>
      <div className="buttonsDiv">
        <button ref={startButtonRef} onClick={startTimer}>
          Start
        </button>
        <button ref={stopButtonRef} onClick={stopTimer}>
          Stop
        </button>
        <button
          ref={resetButtonRef}
          className="resetButton"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
