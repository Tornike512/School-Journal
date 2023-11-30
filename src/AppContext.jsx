import { useState, createContext } from "react";

const subjects_default = [
  { id: "subject-id-1", name: "english" },
  { id: "subject-id-2", name: "georgian" },
  { id: "subject-id-3", name: "math" },
];

const weeks_default = [
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
  grades: [],
  setGrades: undefined,
});

export function AppProvider({ children }) {
  // const [inputValue, setInputValue] = useState([]);
  // const [secondInputValue, setSecondInputValue] = useState([]);
  // const [inputId, setInputId] = useState([]);

  const [subjects, setSubjects] = useState(subjects_default);
  const [weeks, setWeeks] = useState(weeks_default);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);
  console.log(students);
  return (
    <AppContext.Provider
      value={{
        subjects,
        setSubjects,
        weeks,
        setWeeks,
        students,
        setStudents,
        grades,
        setGrades,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
