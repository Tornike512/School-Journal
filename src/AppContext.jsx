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
  const [inputId, setInputId] = useState([]);

  function addId(inputId = uuidv4()) {
    setInputId((prev) => [...prev, inputId]);
    console.log(inputId);
  }

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
        inputId,
        addId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
