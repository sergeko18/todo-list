import React from "react";
import "./App.css";
import { TasksType, Todolist } from "./components/Todolist";
import { v1 } from "uuid";

export type FilterValueType = "all" | "complited" | "active";

function App() {
  let initialTasks: Array<TasksType> = [
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
  ];

  let [tasks, setTasks] = React.useState(initialTasks);
  let [filter, setFilter] = React.useState<FilterValueType>("all");

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function setFilterForTodolist(value: FilterValueType) {
    setFilter(value);
  }

  function addTask(v: string) {
    let newTask = { id: v1(), title: v, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  let tasksFortodolist = tasks;
  if (filter === "complited") {
    tasksFortodolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    tasksFortodolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title={"What to learn"}
        tasks={tasksFortodolist}
        removeTask={removeTask}
        filterTask={setFilterForTodolist}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
