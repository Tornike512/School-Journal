import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../AppContext";
import "./StudentsList.scss";

export function StudentsList() {
  const {
    students,
    setGetPoints,
    getPoints,
    currentWeek,
    currentSubject,
    weekDays,
  } = useContext(AppContext);

  const [edit, setEdit] = useState(false);
  const [inputValues, setInputValues] = useState(
    Array(students.length * 5).fill("")
  );
  const [inputValues1, setInputValues1] = useState(
    Array(students.length * 5).fill("")
  );
  const [inputValues2, setInputValues2] = useState(
    Array(students.length * 5).fill("")
  );
  const [inputValues3, setInputValues3] = useState(
    Array(students.length * 5).fill("")
  );
  const [inputValues4, setInputValues4] = useState(
    Array(students.length * 5).fill("")
  );
  // tu week-id-1 da subject-id-1 mashin inaxeba geofirstsi
  // const [geoFirst, setGeoFirst] = useState([]);
  // const [geoSecond, setGeoSecond] = useState([]);
  // const [geoThird, setGeoThird] = useState("");

  // const [mathFirst, setMathFirst] = useState("");
  // const [mathSecond, setMathSecond] = useState("");
  // const [mathThird, setMathThird] = useState("");

  // const [engFirst, setEngFirst] = useState("");
  // const [engSecond, setEngSecond] = useState("");
  // const [engThird, setEngThird] = useState("");

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

  function studentPoint1(studentId1, value1) {
    const newInputValues = [...inputValues1];
    newInputValues[studentId1] = value1;
    setInputValues(newInputValues);
  }

  const currentGrades = [
    {
      id: "grade-Id-1",
      StudentsId: students[0],
      weekId: currentWeek || "week-id-1",
      subjectId: currentSubject || "subject-id-1",
      points: getPoints,
    },
  ];

  const currentWeekSubject = currentGrades.filter((currentGrade) => {
    currentWeek === "week-id-1" && currentSubject === "subject-id-1";
  });
  // console.log(geoFirst, "georfirst");
  // console.log(currentGrades);

  console.log(inputValues, "input values");
  return (
    <>
      <div className="week-info-spacing">
        <div className="info-spacing">
          <h1 className="first-name">სახელი</h1>
          <h1 className="last-name">გვარი</h1>
        </div>
        <div className="week-spacing">
          {weekDays.map((weekDay) => {
            return (
              <h1 className="week-days" key={weekDay.id}>
                {weekDay.name}
              </h1>
            );
          })}
        </div>
      </div>
      {students?.map((student) => {
        return (
          <div className="new-student-spacing">
            <div key={student.id} className="student-spacing">
              <h1 className="new-student">{student.firstName}</h1>
              <h1 className="new-student">{student.lastName}</h1>
              <div className="point-spacing">
                <div>
                  {currentWeek === "week-id-1" &&
                    currentSubject === "subject-id-1" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {currentWeek === "week-id-2" &&
                    currentSubject === "subject-id-1" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {currentWeek === "week-id-3" &&
                    currentSubject === "subject-id-1" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {currentWeek === "week-id-1" &&
                    currentSubject === "subject-id-2" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {currentWeek === "week-id-2" &&
                    currentSubject === "subject-id-2" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {currentWeek === "week-id-3" &&
                    currentSubject === "subject-id-2" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {currentWeek === "week-id-1" &&
                    currentSubject === "subject-id-3" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {currentWeek === "week-id-2" &&
                    currentSubject === "subject-id-3" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
                <div>
                  {currentWeek === "week-id-3" &&
                    currentSubject === "subject-id-3" &&
                    weekDays.map((weekDay) => {
                      return (
                        <div>
                          <input type="text" placeholder="-" />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* {currentSubject === "subject-id-1" &&
        currentWeek === "week-id-1" &&
        students?.map((student, studentId) => (
          <div className="new-student-spacing" key={student.id}>
            <div className="student-spacing">
              <h1 className="new-student">{student.firstName}</h1>
              <h1 className="new-student">{student.lastName}</h1>
              <div className="point-spacing">
                <div>
                  {[0, 1, 2, 3, 4]
                    .map((id) => (
                      <div key={id}>
                        {edit ? (
                          <input
                            value={inputValues[studentId * 5 + id]}
                            onChange={(e) =>
                              studentPoint(studentId * 5 + id, e.target.value)
                            }
                            onBlur={buttonValue}
                            type="text"
                            placeholder="შემოიყვანეთ"
                          />
                        ) : (
                          <button onClick={changeText}>
                            {inputValues[studentId * 5 + id]}
                          </button>
                        )}
                      </div>
                    ))

                    .flat()}
                </div>
              </div>
            </div>
          </div>
        ))}
      {currentSubject === "subject-id-1" &&
        currentWeek === "week-id-2" &&
        students?.map((student1, studentId1) => (
          <div className="new-student-spacing" key={student1.id}>
            <div className="student-spacing">
              <h1 className="new-student">{student1.firstName}</h1>
              <h1 className="new-student">{student1.lastName}</h1>
              <div className="point-spacing">
                <div>
                  {[0, 1, 2, 3, 4]
                    .map((id1) => (
                      <div key={id1}>
                        {edit ? (
                          <input
                            value={inputValues1[studentId1 * 5 + id1]}
                            onChange={(e) =>
                              studentPoint1(
                                studentId1 * 5 + id1,
                                e.target.value
                              )
                            }
                            onBlur={buttonValue}
                            type="text"
                            placeholder="შემოიყვანეთ"
                          />
                        ) : (
                          <button onClick={changeText}>
                            {inputValues1[studentId1 * 5 + id1]}
                          </button>
                        )}
                      </div>
                    ))

                    .flat()}
                </div>
              </div>
            </div>
          </div>
        ))} */}
    </>
  );
}
