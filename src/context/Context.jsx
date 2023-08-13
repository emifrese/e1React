import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  return (
    <Context.Provider value={{ menu, setMenu }}>{children}</Context.Provider>
  );
};
