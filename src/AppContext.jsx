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

const weekDays_default = [
  { id: "first-day", name: "ორშაბათი" },
  { id: "second-day", name: "სამშაბათი" },
  { id: "third-day", name: "ოთხშაბათი" },
  { id: "fourth-day", name: "ხუთშაბათი" },
  { id: "fifth-day", name: "პარასკევი" },
];

export const AppContext = createContext({
  subjects: [],
  setSubjects: undefined,

  weeks: [],
  setWeeks: undefined,

  students: [],
  setStudents: undefined,

  selectedSubject: "",
  setSelectedSubject: undefined,

  selectedWeek: "",
  setSelectedWeek: undefined,
});

export function AppProvider({ children }) {
  const [subjects, setSubjects] = useState(subjects_default);
  const [weeks, setWeeks] = useState(weeks_default);
  const [weekDays, setWeekDays] = useState(weekDays_default);

  const [students, setStudents] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedWeek, setSelectedWeek] = useState("");

  const [currentWeek, setCurrentWeek] = useState([]);
  const [currentSubject, setCurrentSubject] = useState([]);

  console.log(students);
  console.log(currentWeek, "currentWeek");
  console.log(currentSubject, "currentSubject");
  return (
    <AppContext.Provider
      value={{
        subjects,
        setSubjects,

        weeks,
        setWeeks,

        students,
        setStudents,

        currentWeek,
        setCurrentWeek,

        currentSubject,
        setCurrentSubject,

        selectedSubject,
        setSelectedSubject,

        selectedWeek,
        setSelectedWeek,

        weekDays,
        setWeekDays,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
