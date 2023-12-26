import React, { useState } from "react";
import '../Header/header.css'
import { CiCirclePlus } from "react-icons/ci";


const Header = ({ addTask, darkTheme }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-conntainer">
        <CiCirclePlus size={28} className="icon-plus" />
        <input className="input-add" type="text" placeholder="Add a new task..." value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button className="btn-submit" type="submit"> Add </button>
      </div>
    </form>
  );
};

export default Header;
