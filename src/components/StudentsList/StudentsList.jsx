import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import "./StudentsList.scss";

export function StudentsList({ children }) {
  const { students, setGetPoints, getPoints, currentWeek, currentSubject } =
    useContext(AppContext);

  const [edit, setEdit] = useState(false);
  const [inputValues, setInputValues] = useState(
    Array(students.length).fill("")
  );

  function changeText() {
    setEdit(!edit);
  }

  function buttonValue() {
    setEdit(false);
    setGetPoints((prev) => [...prev, ...inputValues]);
  }

  function studentPoint(studentId, value) {
    const newInputValues = [...inputValues];
    newInputValues[studentId] = value;
    setInputValues(newInputValues);
  }

  const currentGrades = [
    {
      id: "points-Id-1",
      StudentsId: students[0],
      weekId: currentWeek || "week-id-1",
      subjectId: currentSubject || "subject-id-1",
      points: getPoints,
    },
  ];

  console.log(currentGrades);
  return (
    <>
      <div className="week-info-spacing">
        <div className="info-spacing">
          <h1 className="first-name">სახელი</h1>
          <h1 className="last-name">გვარი</h1>
        </div>
        <div className="week-spacing">
          <h1 className="monday">ორშაბათი</h1>
          <h1 className="tuesday">სამშაბათი</h1>
          <h1 className="wednesday">ოთხშაბათი</h1>
          <h1 className="thursday">ხუთშაბათი</h1>
          <h1 className="friday">პარასკევი</h1>
        </div>
      </div>

      {students?.map((student, studentId) => (
        <div className="new-student-spacing" key={student.id}>
          <div className="student-spacing">
            <h1 className="new-student">{student.firstName}</h1>
            <h1 className="new-student">{student.lastName}</h1>
            <div className="point-spacing">{children}</div>
          </div>
        </div>
      ))}
    </>
  );
}
