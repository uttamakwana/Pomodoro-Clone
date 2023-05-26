import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import audio from "./assets/alarm.mp3";
// we have created StateContext, so that we can access the state that we are going to define here will be accessible to all the childs
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [activeClock, setActiveClock] = useState("Pomodoro");
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(15 * 60);

  // console.log("StateProvider" , pomodoroTime);
  const [time, setTime] = useState(pomodoroTime);
  const [clockStart, setClockStart] = useState(false);
  const [toggleSettings, setToggleSettings] = useState(false);



  useEffect(() => {
    let interval = null;
    let alarmMusic = new Audio(audio);
    if (clockStart && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      if (activeClock === "Pomodoro") {
        setActiveClock("ShortBreak");
        setTime(shortBreakTime);
        setClockStart(true);
      }
      if (activeClock === "ShortBreak") {
        setActiveClock("Pomodoro");
        setTime(pomodoroTime);
        setClockStart(false);
      }
      if (activeClock === "LongBreak") {
        setActiveClock("Pomodoro");
        setTime(pomodoroTime);
        setClockStart(false);
      }
      alarmMusic.play();
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, clockStart, pomodoroTime, shortBreakTime, longBreakTime]);

  return (
    <StateContext.Provider
      value={{
        activeClock,
        setActiveClock,
        time,
        setTime,
        pomodoroTime,
        setPomodoroTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        clockStart,
        setClockStart,
        toggleSettings,
        setToggleSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
