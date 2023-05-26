import React, { useContext } from "react";
import "./header.css";
import { StateContext } from "../../StateProvider";
import Settings from "../Settings";
const Header = () => {
  const { activeClock, toggleSettings, setToggleSettings } = useContext(StateContext);
  return (
    <header className="header">
      <h1
        className={`header-logo-text ${
          activeClock === "Pomodoro"
            ? "pomodoro-active"
            : activeClock === "ShortBreak"
            ? "short-break-active"
            : "long-break-active"
        }`}
      >
        PomoClone
      </h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a
              href="#"
              className={`nav-list-link ${
                activeClock === "Pomodoro"
                  ? "pomodoro-active"
                  : activeClock === "ShortBreak"
                  ? "short-break-active"
                  : "long-break-active"
              }`}
              onClick={() => {setToggleSettings(true); window.scroll(100, 100)}}
            >
              Settings
            </a>
          </li>
          <li className="nav-list-item">
            <a
              href="#about-container"
              className={`nav-list-link ${
                activeClock === "Pomodoro"
                  ? "pomodoro-active"
                  : activeClock === "ShortBreak"
                  ? "short-break-active"
                  : "long-break-active"
              }`}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
