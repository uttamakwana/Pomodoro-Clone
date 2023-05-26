import { useContext } from "react";
import "./App.css";
import StateProvider, { StateContext } from "./StateProvider";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TodoApp from "./components/Todos/App";
import About from "./components/About/About";
import Settings from "./components/Settings"; 

function App() {
  const { activeClock, toggleSettings } = useContext(StateContext);
  return (
    <main>
      <main
        className={`main ${
          activeClock === "LongBreak"
            ? "main-long-break"
            : activeClock === "Pomodoro"
            ? "main-pomodoro"
            : "main-short-break"
        }`}
        id={toggleSettings ? "blurHeader" : ""}
      >
        {/* 
      ***********
      Header section
      ***********/}
        <Header />
        {/* 
      ***********
      Hero section
      ***********/}
        <Hero />
      </main>
      <div className={`my-todos ${
            activeClock === "Pomodoro"
              ? "pomodoro-active"
              : activeClock === "ShortBreak"
              ? "short-break-active"
              : "long-break-active"
          }`} id={toggleSettings ? "blurMyTodos" : ""}>
        <TodoApp />
      </div>
      <main id={toggleSettings ? "blurFooter" : ""}>
        <About />
      </main>
      <Settings />
    </main>
  );
}

export default App;
