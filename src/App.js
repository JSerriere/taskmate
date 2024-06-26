import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import './App.css';


function App() {
  // Set local storage here. If storage empty, then "or-option" (||) with an empty array:
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  // Every time the tasklist is updated, this information is set inside local storage:
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
