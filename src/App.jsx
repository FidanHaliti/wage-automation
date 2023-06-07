import "./App.css";
import WorkerList from "./assets/components/Workers/WorkerList";
import Workers from "./assets/components/Workers/Workers";
import { useEffect, useState } from "react";

function App() {
  const [workers, setWorkers] = useState(
    localStorage.getItem("workers") ? JSON.parse(localStorage.getItem("workers")) : []
  );
  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers]);

  return (
    <div className="app-card">
      <h1 className="mt-6 text-center text-white text-3xl">
        Automation salary
      </h1>
      <Workers setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </div>
  );
}

export default App;
