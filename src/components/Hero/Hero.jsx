import React, { useContext } from "react";
import "./hero.css";
import { StateContext } from "../../StateProvider";
import clickSound from "../../assets/click.mp3";
import clickSound2 from "../../assets/pause.mp3";
import clickSound3 from "../../assets/reset.mp3";
import tickingAudio from "../../assets/ticking.mp3";
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
    toggleSettings,
  } = useContext(StateContext);

  const getTime = (time) => {
    let minute = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minute < 10 ? `0${minute}` : minute} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  const soundOnStart = new Audio(clickSound);
  const soundOnPause = new Audio(clickSound2);
  const soundOnReset = new Audio(clickSound3);
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
            id={`${activeClock === "Pomodoro" ? "pomodoro-active-button" : ""}`}
            onClick={() => {
              setActiveClock("Pomodoro");
              setTime(pomodoroTime);
              setClockStart(false);
            }}
          >
            Pomodoro
          </button>
          <button
          id={`${activeClock === "ShortBreak" ? 'short-break-active-button' : ''}`}
            onClick={() => {
              alert("Do you really want to take a break now?");
              setActiveClock("ShortBreak");
              setTime(shortBreakTime);
              setClockStart(false);
              // alert("Do you really want to take break?");
            }}
          >
            Short Break
          </button>
          <button
            id={`${
              activeClock === "LongBreak" ? "long-break-active-button" : ""
            }`}
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
              {!toggleSettings && activeClock === "Pomodoro"
                ? getTime(time)
                : getTime(pomodoroTime)}
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
              <button
                onClick={() => {
                  setClockStart(false);
                  soundOnPause.play();
                }}
              >
                Pause
              </button>
              <button
                onClick={() => {
                  soundOnReset.play();
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
                soundOnStart.play();
                setClockStart(true);
                // Ticking sound of clock
                // setTimeout(() => {
                //   const ticking = new Audio(tickingAudio);
                //   ticking.play();
                //   ticking.volume = 0.2;
                // }, 3000);
              }}
            >
              Start
            </button>
          )}
        </div>
      </div>
      {clockStart ? (
        <p className="time-to-focus">
          <strong>
            {activeClock === "Pomodoro"
              ? "Time to focus!✍️"
              : activeClock === "ShortBreak"
              ? "Time for a healthy break!😌"
              : "Time for a long break!🍴"}
          </strong>
        </p>
      ) : (
        ""
      )}
    </section>
  );
};

export default Hero;
