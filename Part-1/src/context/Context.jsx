import { createContext, useContext, useState } from "react";

const myContext = createContext();

export const useCount = () => {
  return useContext(myContext);
};

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <myContext.Provider value={{ count, setCount }}>
      {children}
    </myContext.Provider>
  );
};
