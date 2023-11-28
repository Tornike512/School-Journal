import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const subjects = [
  { id: "subject-id-1", name: "english" },
  { id: "subject-id-2", name: "georgian" },
  { id: "subject-id-3", name: "math" },
];

const weeks = [
  { id: "week-id-1", name: "first week" },
  { id: "week-id-2", name: "second week" },
  { id: "week-id-3", name: "third week" },
];

const students = [
  { id: "student-id-1", firstName: "alexander", lastName: "volkanovski" },
  { id: "student-id-2", firstName: "islam", lastName: "makhachev" },
];

export const AppContext = createContext({
  subjects: [],
  setSubjects: undefined,
  weeks: [],
  setWeeks: undefined,
  students: [],
  setStudents: undefined,
});

export function AppProvider({ children }) {
  // const [inputValue, setInputValue] = useState([]);
  // const [secondInputValue, setSecondInputValue] = useState([]);
  // const [inputId, setInputId] = useState([]);

  const [subject, setSubject] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const [students, setStudents] = useState([]);

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
