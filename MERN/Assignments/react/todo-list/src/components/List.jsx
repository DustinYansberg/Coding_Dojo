import React, { useState } from "react";

const List = ({ task, index, completeTask, deleteTask }) => {
  const handleTaskCompletion = () => {
    // e.preventDefault();
    // console.log(index, task.description, task.isComplete);
    task.isComplete = !task.isComplete;
    return completeTask(task, index);
  };

  const handleDelete = (index) => {
    return deleteTask(index);
  };
  return (
    <div>
      <label htmlFor={index}>{!task.isComplete ? task.description : <s>{task.description}</s>}</label>
      <input
        type="checkbox"
        id={index}
        checked={task.isComplete ? true : false}
        onChange={() => handleTaskCompletion(index)}
      />
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default List;
