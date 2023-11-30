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

export const AppContext = createContext({
  subjects: [],
  setSubjects: undefined,
  weeks: [],
  setWeeks: undefined,
  students: [],
  setStudents: undefined,
  points: [],
  setPoints: undefined,
});

export function AppProvider({ children }) {
  const [subjects, setSubjects] = useState(subjects_default);
  const [weeks, setWeeks] = useState(weeks_default);
  const [students, setStudents] = useState([]);
  const [points, setPoints] = useState([]);

  return (
    <AppContext.Provider
      value={{
        subjects,
        setSubjects,
        weeks,
        setWeeks,
        students,
        setStudents,
        points,
        setPoints,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
