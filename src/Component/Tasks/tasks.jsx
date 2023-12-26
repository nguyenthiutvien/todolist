import React from "react";
import Task from "../Task/task";

const Tasks = ({ tasks, onEditTask, onDeleteTask, onCompletedTask }) => {
  
  return (
    <ul>
      {tasks.slice().reverse().map((task) => (
        <Task key={task.id} task={task} onEditTask={onEditTask} onDeleteTask={onDeleteTask} onCompletedTask={onCompletedTask}
        />
      ))}
    </ul>
  );
};

export default Tasks;
