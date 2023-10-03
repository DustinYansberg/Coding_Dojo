const List = ({ task, index, completeTask, deleteTask }) => {
  return (
    <div>
      <label htmlFor={index}>
        {!task.isComplete ? task.description : <s>{task.description}</s>}
      </label>
      <input
        type="checkbox"
        id={index}
        checked={task.isComplete}
        onChange={() => completeTask(index)}
      />
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

export default List;
