import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import '../Task/task.css'

const Task = ({ task, onEditTask, onDeleteTask, onCompletedTask }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDone = () => {
    if (title.trim()) {
      onEditTask(task.id, title.trim());
      setEditing(false);
    }
  };
  const handleCancel = () => {
    setEditing(false);
    setTitle(task.title);
  };
  const handleCompleted = () => {
    onCompletedTask(task.id);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteTask(task.id);
  };

  return (
    <li className="task">
      {editing ? (
        <form onSubmit={handleDone} className="form-completed">
          <div className="input-containers">
            <input type="text" value={title} onChange={handleChange} className="title" />
          </div>
          <div className="btn-container">
            <button type="submit"> <MdOutlineDone size={20} className="icon-done" /> </button>
            <button type="button" onClick={handleCancel}>  <RxCross2 size={20} className="icon-cancel" /></button>
          </div>
        </form>
      ) : (
        <div className="task-container">
          <div className="task-card">
            <input type="checkbox" checked={task.completed} onChange={handleCompleted}  className="checkbox"/>
            <span className={task.completed ? "task-completed" : "task-notCompleted"}> {task.title} </span>
          </div>
          <div className="task-card">
            <button onClick={handleEdit}> <CiEdit size={20} className="icon-edit"/></button>
            <button onClick={handleDelete}> <AiOutlineDelete size={18} className="icon-delete"/> </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
