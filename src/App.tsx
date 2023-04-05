import React from "react";
import "./App.css";
import { TasksType, Todolist } from "./components/Todolist";

function App() {
  let tasks1: Array<TasksType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];

  let tasks2: Array<TasksType> = [
    { id: 1, title: "1+1", isDone: true },
    { id: 2, title: "Home alone", isDone: true },
    { id: 3, title: "React native", isDone: false },
  ];

  let tasks3: Array<TasksType> = [
    { id: 1, title: "lose your self", isDone: true },
    { id: 2, title: "shape of my heart", isDone: true },
    { id: 3, title: "in the end", isDone: false },
    { id: 4, title: "numb", isDone: false },
  ];

  return (
    <div className="App">
      <Todolist title={"What to learn"} tasks={tasks1} />
      <Todolist title={"Movies"} tasks={tasks2} />
      <Todolist title={"Songs"} tasks={tasks3} />
    </div>
  );
}

export default App;
