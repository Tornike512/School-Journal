import { useState, createContext } from "react";

const subjects_default = [
  { id: "subject-id-1", name: "ქართული" },
  { id: "subject-id-2", name: "მათემატიკა" },
  { id: "subject-id-3", name: "ინგლისური" },
];

const weeks_default = [
  { id: "week-id-1", name: "პირველი კვირა" },
  { id: "week-id-2", name: "მეორე კვირა" },
  { id: "week-id-3", name: "მესამე კვირა" },
];

const points_default = [
  {
    id: "grade-id-1",
    studentsId: "students-id-1",
    subjectId: "subject-id-1,",
    weekId: "week-id-1",
    points: 10,
  },
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

  selectedSubject: "",
  setSelectedSubject: undefined,
});

export function AppProvider({ children }) {
  const [subjects, setSubjects] = useState(subjects_default);
  const [weeks, setWeeks] = useState(weeks_default);
  const [points, setPoints] = useState([points_default]);
  const [students, setStudents] = useState([]);
  const [getPoints, setGetPoints] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");

  const [currentWeek, setCurrentWeek] = useState();
  const [currentSubject, setCurrentSubject] = useState();

  console.log(students);
  console.log(getPoints);

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

        currentWeek,
        setCurrentWeek,

        currentSubject,
        setCurrentSubject,

        getPoints,
        setGetPoints,

        selectedSubject,
        setSelectedSubject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
