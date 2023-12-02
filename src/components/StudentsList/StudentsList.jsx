import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import "./StudentsList.scss";

export function StudentsList() {
  const { students, getPoints, setGetPoints } = useContext(AppContext);

  const [edit, setEdit] = useState(false);
  const [inputValues, setInputValues] = useState(
    Array(students.length).fill("")
  );

  function changeText() {
    setEdit(!edit);
  }

  function buttonValue() {
    setEdit(false);
    setGetPoints((prevPoints) => [...prevPoints, ...inputValues]);
  }

  function studentPoint(studentId, value) {
    const newInputValues = [...inputValues];
    newInputValues[studentId] = value;
    setInputValues(newInputValues);
  }

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
            <div className="point-spacing">
              {[0, 1, 2, 3, 4].map((id) => (
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
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
