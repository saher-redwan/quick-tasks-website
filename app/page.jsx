import AddTasks from "./components/AddTasks";
import Evaluation from "./components/Evaluation";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <main>
      <div className="todo-container text-[#fff] w-[500px] max-w-[calc(100vh-10px)] max-h-[80%] overflow-auto">
        <h1>To-Do App</h1>
        <Evaluation />

        <div className="add-tasks">
          <AddTasks />

          <Tasks />

        </div>

      </div>
    </main>
  );
}
