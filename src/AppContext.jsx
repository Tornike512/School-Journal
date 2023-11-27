import { useState, createContext } from "react";

export const AppContext = createContext({
  inputValue: "",
  setInputValue: undefined,
});

export function AppProvider({ children }) {
  const [inputValue, setInputValue] = useState([]);

  function addInputValue(inputValue) {
    setInputValue((prev) => [...prev, inputValue]);
  }

  return (
    <AppContext.Provider value={{ inputValue, addInputValue }}>
      {children}
    </AppContext.Provider>
  );
}
