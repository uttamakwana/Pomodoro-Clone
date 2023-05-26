import React, { useContext, useRef, useState } from "react";
import "./settings.css";
import { StateContext } from "../StateProvider";

const Settings = () => {
  const {
    toggleSettings,
    setToggleSettings,
    setPomodoroTime,
    setShortBreakTime,
    setLongBreakTime,
    setTime,
    activeClock,
    setActiveClock,
    clockStart,
    setClockStart,
  } = useContext(StateContext);

  //   console.log(toggleSettings);

  const [valueChange, setValueChange] = useState(false);

  const pomodoroTimeRef = useRef(null);
  const shortBreakTimeRef = useRef(null);
  const longBreakTimeRef = useRef(null);

  const handleSumbit = () => {
    // console.log("Ha thay to 6");
    if (activeClock === "Pomodoro") {
      setClockStart(false);
      setTime(pomodoroTimeRef.current.value * 60);
    }
    setToggleSettings(false);
    setActiveClock("Pomodoro");
    setTimeout(() => {
      //   setPomodoroTime(pomodoroTimeRef.current.value * 60);
      //   setShortBreakTime(shortBreakTimeRef.current.value * 60);
      //   setLongBreakTime(longBreakTimeRef.current.value * 60);
    }, 2000);
  };
  return (
    <section className={`settings ${toggleSettings ? "active" : ""}`}>
      <span
        id="close-settings-btn"
        onClick={() => {
          setToggleSettings(false);
        }}
      >
        &times;
      </span>
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Set your time according to your work</p>
      </div>
      <div className="settings-body">
        <div className="settings-input-container">
          <label htmlFor="pomodoroTime">Change Pomodoro Time</label>
          <input
            type="number"
            name="pomodoroTime"
            id="pomodoroTime"
            ref={pomodoroTimeRef}
            onChange={(e) => {
              setValueChange(true);
              setPomodoroTime(e.target.value * 60);
            }}
          />
        </div>
        <div className="settings-input-container">
          <label htmlFor="pomodoroTime">Change Short Break Time</label>
          <input
            type="number"
            name="shortBreakTime"
            id="shortBreakTime"
            ref={shortBreakTimeRef}
            onChange={(e) => {
              setValueChange(true);
              setShortBreakTime(e.target.value * 60);
            }}
          />
        </div>
        <div className="settings-input-container">
          <label htmlFor="pomodoroTime">Change Long Break Time</label>
          <input
            type="number"
            name="longBreakTime"
            id="longBreakTime"
            ref={longBreakTimeRef}
            onChange={(e) => {
              setValueChange(true);
              setLongBreakTime(e.target.value * 60);
            }}
          />
        </div>
      </div>
      <div className="settings-footer">
        {valueChange ? <button onClick={handleSumbit}>Submit</button> : ""}
      </div>
    </section>
  );
};

export default Settings;
