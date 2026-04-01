"use client"

import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Evaluation from "./components/Evaluation";
import Tasks from "./components/Tasks";

export default function Home() {

  const [tasks, setTasks] = useState([]);
  const [isTasksStatusChanged, setIsTasksStatusChanged] = useState(false)

  useEffect(() => {
    const storedTasks = localStorage.getItem("myTasks");

    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        }
      } catch (error) {
        console.error("localStorage err", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("welcome-item").classList.add("show");
    }, 2000);
  }, [])

  return (
    <main className="bg-position-[75%] lg:bg-center">
      <div className="todo-container text-[#fff] w-[500px] max-w-[calc(100vh-10px)] max-h-[80%] overflow-auto overflow-x-hidden bg-[linear-gradient(162deg,_#00000042,_transparent)] lg:bg-none">
        {/* <h1>To-Do App</h1> */}
        <div className="masking-container">
          <h1 className="masked-text !text-[2.15rem]" style={{ filter: "drop-shadow(4px 2px 0.5px #463e6f) grayscale(0.25)", fontFamily: "Mystery Quest, system-ui" }}>To-Do App</h1>
        </div>

        <Evaluation tasks={tasks} isTasksStatusChanged={isTasksStatusChanged}/>

        <div className="add-tasks">
          <AddTasks tasks={tasks} setTasks={setTasks} />

          <Tasks tasks={tasks} setTasks={setTasks} setIsTasksStatusChanged={setIsTasksStatusChanged}/>
        </div>

      </div>


      {/* welcome message */}
      <div id="welcome-item" className="nice-message">🚀 Welcome to the world of tasks!</div>

    </main>
  );
}
