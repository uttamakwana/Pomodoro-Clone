import React, { useContext } from "react";
import "./hero.css";
import { StateContext } from "../../StateProvider";
const Hero = () => {
  const {
    activeClock,
    setActiveClock,
    time,
    setTime,
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    clockStart,
    setClockStart,
    toggleSettings
  } = useContext(StateContext);

  const getTime = (time) => {
    let minute = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minute < 10 ? `0${minute}` : minute} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };
  return (
    <section className="hero">
      <div className="clock">
        <div
          className={`clock-header ${
            activeClock === "Pomodoro"
              ? "pomodoro-active"
              : activeClock === "ShortBreak"
              ? "short-break-active"
              : "long-break-active"
          }`}
        >
          <button
            onClick={() => {
              setActiveClock("Pomodoro");
              setTime(pomodoroTime);
              setClockStart(false);
            }}
          >
            Pomodoro
          </button>
          <button
            onClick={() => {
              setActiveClock("ShortBreak");
              setTime(shortBreakTime);
              setClockStart(false);
              // alert("Do you really want to take break?");
            }}
          >
            Short Break
          </button>
          <button
            onClick={() => {
              setActiveClock("LongBreak");
              setTime(longBreakTime);
              setClockStart(false);
            }}
          >
            Long Break
          </button>
        </div>
        <div className="clock-body">
          {activeClock === "Pomodoro" && (
            <strong
              className={`clock-time ${
                activeClock === "Pomodoro"
                  ? "pomodoro-active"
                  : activeClock === "ShortBreak"
                  ? "short-break-active"
                  : "long-break-active"
              }`}
            >
              {!toggleSettings && activeClock === "Pomodoro" ? getTime(time) : getTime(pomodoroTime)}
            </strong>
          )}
          {activeClock === "ShortBreak" && (
            <strong
              className={`clock-time ${
                activeClock === "Pomodoro"
                  ? "pomodoro-active"
                  : activeClock === "ShortBreak"
                  ? "short-break-active"
                  : "long-break-active"
              }`}
            >
              {!toggleSettings ? getTime(time) : getTime(shortBreakTime)}
            </strong>
          )}
          {activeClock === "LongBreak" && (
            <strong
              className={`clock-time ${
                activeClock === "Pomodoro"
                  ? "pomodoro-active"
                  : activeClock === "ShortBreak"
                  ? "short-break-active"
                  : "long-break-active"
              }`}
            >
              {!toggleSettings ? getTime(time) : getTime(longBreakTime)}
            </strong>
          )}
        </div>
        <div
          className={`clock-footer ${
            activeClock === "Pomodoro"
              ? "pomodoro-active"
              : activeClock === "ShortBreak"
              ? "short-break-active"
              : "long-break-active"
          }`}
        >
          {clockStart ? (
            <>
              <button onClick={() => setClockStart(false)}>Pause</button>
              <button
                onClick={() => {
                  if (activeClock === "Pomodoro") {
                    setTime(pomodoroTime);
                    setClockStart(false);
                  } else if (activeClock === "ShortBreak") {
                    setTime(shortBreakTime);
                    setClockStart(false);
                  } else {
                    setTime(longBreakTime);
                    setClockStart(false);
                  }
                }}
              >
                Reset
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setClockStart(true);
              }}
            >
              Start
            </button>
          )}
        </div>
      </div>
      {clockStart ? <p className="time-to-focus"><strong>{activeClock === "Pomodoro" ? "Time to focus!✍️" : activeClock === "ShortBreak" ? "Time for a healthy break!😌" : "Time for a long break!🍴"}</strong></p> : ''}
    </section>
  );
};

export default Hero;
