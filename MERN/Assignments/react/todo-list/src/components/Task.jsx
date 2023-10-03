import React from "react";
import { useState } from "react";

const Task = ({ addTask }) => {
  const [task, setTask] = useState({
    description: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    return setTask({ description: "", isComplete: false });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTask"
          placeholder="write a new task..."
          autoComplete="false"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <input type="submit" value="Save" />
      </form>
    </>
  );
};

export default Task;
