import "./App.css";
import { useState } from "react";
import List from "./components/List";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    { description: "Wash Clothes", isComplete: false },
    { description: "Dry Clothes", isComplete: false },
    { description: "Fold Clothes", isComplete: false },
  ]);

  const completeTask = (index) => {
    const tasksCopy = [...tasks];
    tasksCopy[index].isComplete = !tasksCopy[index].isComplete;

    setTasks([...tasksCopy]);
  };
  const deleteTask = (index) => {
    
    return setTasks([...tasks.filter((_, idx) => idx !== index)]);
  };

  const addTask = (task) => {
    return setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <Task addTask={addTask} />
      <hr />
      {tasks.map((task, index) => {
        return (
          <List
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

export default App;
