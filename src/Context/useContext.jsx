import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAuth = () => {
    const context = useContext(AppContext);
    return context;
};

export const AppProvider = ({ children }) => {
  let [todosDone, setTodoDone] = useState([]);


  return (
    <AppContext.Provider
      value={{
        todosDone,
        setTodoDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}