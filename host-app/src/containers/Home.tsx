import { useState } from "react";
import "./Home.css";
import { Button } from "../Button/Button";
import { Link } from "react-router";

export const Home = () => {
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>Vite + React + Micro FrontEnd</h1>
      <div className="card">
        <Button onClick={handleBtnClick} text={`count is ${count}`} />
      </div>
      <Link to={"/remoteHome"}>Remote Home</Link>
    </>
  );
};
