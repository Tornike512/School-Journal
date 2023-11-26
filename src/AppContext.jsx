import { useState, createContext } from "react";

export const AppContext = createContext({
  count: 0,
  setCount: undefined,
});

export function AppProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={(count, setCount)}>
      {children}
    </AppContext.Provider>
  );
}
