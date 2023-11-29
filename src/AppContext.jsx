import { useState, createContext } from "react";

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

// const students = [
//   { id: "student-id-1", firstName: "alexander", lastName: "volkanovski" },
//   { id: "student-id-2", firstName: "islam", lastName: "makhachev" },
// ];

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

  const [subjects, setSubject] = useState([subjects]);
  const [weeks, setWeeks] = useState([weeks]);
  const [students, setStudents] = useState([]);
  const [grade, setGrade] = useState([]);
  return (
    <AppContext.Provider
      value={{
        subjects,
        setStudents,
        weeks,
        setWeeks,
        students,
        setStudents,
        grade,
        setGrade,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
