import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext({
  inputValue: "",
  setInputValue: undefined,
  secondInputValue: "",
  setSecondInputValue: undefined,
  inputId: uuidv4(),
  setInputId: undefined,
});

export function AppProvider({ children }) {
  const [inputValue, setInputValue] = useState([]);
  const [secondInputValue, setSecondInputValue] = useState([]);
  function addInputValue(inputValue) {
    setInputValue((prev) => [...prev, inputValue]);
  }
  function addSecondInputValue(secondInputValue) {
    setSecondInputValue((prev) => [...prev, secondInputValue]);
  }

  return (
    <AppContext.Provider
      value={{
        inputValue,
        addInputValue,
        secondInputValue,
        addSecondInputValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
