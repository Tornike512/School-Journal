import { useState, createContext } from "react";

export const AppContext = createContext({
  input: [],
  setInput: undefined,
  secondInput: [],
  setSecondInput: undefined,
});

export function AppProvider({ children }) {
  const [input, setInput] = useState([]);
  const [secondInput, setSecondInput] = useState([]);

  return (
    <AppContext.Provider value={(input, setInput, secondInput, setSecondInput)}>
      {children}
    </AppContext.Provider>
  );
}
