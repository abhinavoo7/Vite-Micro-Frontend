import { useState } from "react";
import "./Home.css";

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + Micro FrontEnd</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};
