import React, { ChangeEvent, KeyboardEvent } from "react";
import { FilterValueType } from "../App";

export type TasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TasksType[];
  removeTask: (taskId: string) => void;
  filterTask: (value: FilterValueType) => void;
  addTask: (v: string) => void;
};

export function Todolist(props: PropsType) {
  let [newTaskTitle, setNewTaskTitle] = React.useState<string>("");

  function addTaskHandler() {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  }

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      addTaskHandler();
    }
  };

  const onAllClickHandler = () => props.filterTask("all");
  const onActiveClickHandler = () => props.filterTask("active");
  const onComlitedClickHandler = () => props.filterTask("complited");

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button
          onClick={() => {
            addTaskHandler();
          }}
        >
          +
        </button>
      </div>
      <ul>
        {props.tasks.map((t) => {
          const removeTaskHandler = () => props.removeTask(t.id);

          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={removeTaskHandler}>X</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onComlitedClickHandler}>Completed</button>
      </div>
    </div>
  );
}
