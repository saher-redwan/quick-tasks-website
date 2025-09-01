"use client"

import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Evaluation from "./components/Evaluation";
import Tasks from "./components/Tasks";

export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("welcome-item").classList.add("show");
    }, 2000);
  }, [])

  return (
    <main>
      <div className="todo-container text-[#fff] w-[500px] max-w-[calc(100vh-10px)] max-h-[80%] overflow-auto overflow-x-hidden">
        {/* <h1>To-Do App</h1> */}
        <div className="masking-container">
          <h1 className="masked-text !text-[1.6rem]" style={{ filter: "drop-shadow(4px 2px 0.5px #463e6f) grayscale(0.25)" }}>To-Do App</h1>
        </div>

        <Evaluation tasks={tasks} />

        <div className="add-tasks">
          <AddTasks tasks={tasks} setTasks={setTasks} />

          <Tasks tasks={tasks} setTasks={setTasks} />
        </div>

      </div>


      {/* welcome message */}
      <div id="welcome-item" className="nice-message">🚀 Welcome to the world of tasks!</div>

    </main>
  );
}
