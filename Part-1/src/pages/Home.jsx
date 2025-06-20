import React from "react";
import { useCount } from "../context/Context";

const Home = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Home;
