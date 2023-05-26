import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { StateContext } from "../../../../StateProvider";

const Todos = () => {
  const { activeClock } = useContext(StateContext);
  const [todoData, setTodoData] = useState({
    id: "",
    titleData: "",
    descriptionData: "",
    priorityData: "",
    timeData: "",
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [time, setTime] = useState("");

  //   get data from local storage

  const getDataFromLocalStorage = () => {
    const todoList = localStorage.getItem("todos");

    if (todoList) {
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return [];
    }
  };

  const [todo, setTodo] = useState(getDataFromLocalStorage());

  useLayoutEffect(() => {
    const inputString = time;
    const dt = new Date(inputString);

    // Format the output string
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const outputString = dt.toLocaleString("en-US", options);
    setTodoData({
      id: new Date(),
      titleData: title,
      descriptionData: description,
      priorityData: priority,
      timeData: outputString,
    });
  }, [title, description, priority, time]);

  const handleSubmit = () => {
    if (todoData.titleData !== "" && todoData.descriptionData !== "") {
      setTodo([...todo, todoData]);
      setTitle("");
      setDescription("");
      setPriority("");
      setTime("");
    } else {
      if (todoData.titleData === "" && todoData.descriptionData === "") {
        alert("Please enter all the details!📝");
      } else {
        if (todoData.titleData === "") {
          alert("Please enter the title of todo✍️");
        } else {
          alert("Please enter the description of todo✍️");
        }
      }
    }
  };

  const deleteTodo = (id) => {
    const filterArray = todo.filter((todo, index) => {
      return index !== id;
    });

    setTodo(filterArray);
  };

  //   store data in localstorage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  });

  return (
    <>
      <main className="todos-container">
        {/* <h1 className="todos-heading">Add Todo</h1> */}
        <div className="todos">
          <div
            className={`todo-input-container ${
              activeClock === "Pomodoro"
                ? "pomodoro-active"
                : activeClock === "ShortBreak"
                ? "short-break-active"
                : "long-break-active"
            }`}
          >
            <input
              type="text"
              name="title"
              id="title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <label htmlFor="title" className="label-effect">
              Title
            </label>
          </div>
          <div
            className={`todo-input-container ${
              activeClock === "Pomodoro"
                ? "pomodoro-active"
                : activeClock === "ShortBreak"
                ? "short-break-active"
                : "long-break-active"
            }`}
          >
            <input
              type="text"
              name="description"
              required
              id="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
            <label htmlFor="description" className="label-effect">
              Description
            </label>
          </div>
          <div className="todo-input-container">
            <button type="submit" id="submit-todo-btn" onClick={handleSubmit}>
              Submit
            </button>
            {(title !== "" ||
              description !== "" ||
              priority !== "" ||
              time !== "") && (
              // <div className="todo-input-container">
              <button
                onClick={() => {
                  setTitle("");
                  setDescription("");
                  setPriority("");
                  setTime("");
                }}
              >
                Reset
              </button>
              // </div>
            )}
          </div>
        </div>
      </main>

      {/* Showing Todos below the add todo component */}

      {todo.length !== 0 ? (
        <main
          className={`display-todos-container ${
            activeClock === "Pomodoro"
              ? "pomodoro-active"
              : activeClock === "ShortBreak"
              ? "short-break-active"
              : "long-break-active"
          }`}
        >
          <h1>Your Todos</h1>
          {todo.map((todo, index) => {
            return (
              <div
                className={`todo-container ${
                  activeClock === "Pomodoro"
                    ? "pomodoro-active"
                    : activeClock === "ShortBreak"
                    ? "short-break-active"
                    : "long-break-active"
                }`}
                key={todo.id}
              >
                <h2>{todo.titleData}</h2>
                <p className="todo-desc">{todo.descriptionData}</p>
                <img
                  src="https://img.icons8.com/arcade/64/delete-forever.png"
                  alt="filled-trash"
                  className="delete-icon"
                  onClick={() => deleteTodo(index)}
                />
              </div>
            );
          })}
        </main>
      ) : (
        ""
      )}
    </>
  );
};

export default Todos;
