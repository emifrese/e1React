import { createContext, useState } from "react";

export const Context = createContext();

const initialValues = {
  isOpen: false
};

export const ContextProvider = ({ children }) => {

  const [menu, setMenu] = useState(initialValues.isOpen);

  const menuHandler = () => {
    setMenu(state => !state)
  }

  const data = {
    menu, 
    menuHandler
  }

  return (
    <Context.Provider value={data}>{children}</Context.Provider>
  );
};
