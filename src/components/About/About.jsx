import React from "react";
import "./about.css";

const About = () => {
  return (
    <footer className="about-container" id="about-container">
      <div className="about">
        <h1 className="about-heading-text">About</h1>
        <div className="about-input-container">
          <p>
            <strong>
              <span>W</span>hy Pomodoro?
            </strong>
          </p>
          <p>
            The Pomodoro Technique helps you resist all of those
            self-interruptions and re-train your brains to focus. Each pomodoro
            is dedicated to one task and each break is a chance to reset and
            bring your attention back to what you should be working on.
          </p>
        </div>
        <div className="about-input-container">
          <p>
            <strong>
              <span>W</span>hy Settings?
            </strong>
          </p>
          <p>
            With Momentum's Pomodoro timer you can easily customize the Focus
            and Break timers to fit your personal workflow. To change the length
            of your Focus or Break, hover your mouse over the timer, click •••
            that appears to the right, and then update the Focus or Break
            sections.
          </p>
        </div>
        <div className="about-input-container">
          <p>
            <strong>
              <span>W</span>hy Todos?
            </strong>
          </p>
          <p>
            By keeping such a list, you make sure that your tasks are written
            down all in one place so you don't forget anything important. And by
            prioritizing tasks, you plan the order in which you'll do them, so
            that you can tell what needs your immediate attention, and what you
            can leave until later.
          </p>
        </div>
      </div>

      <footer>
        <div className="footer-links">
          <a href="https://github.com/uttamakwana" target="_blank">
            <img
              src="https://img.icons8.com/3d-fluency/94/github.png"
              alt="github"
            />
          </a>
          <a href="https://linkedin.com/in/uttamakwana" target="_blank">
            <img
              src="https://img.icons8.com/3d-fluency/94/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://instagram.com/uttamakwana" target="_blank">
            <img
              src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
              alt="instagram-new"
            />
          </a>
        </div>
        <p>Copyright &#169; 2022-2023 | Uttam Makwana</p>
        <p>
          <strong>All rights reserved.</strong>
        </p>
      </footer>
    </footer>
  );
};

export default About;
