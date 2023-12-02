import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import "./StudentsList.scss";

export function StudentsList() {
  const { students, input } = useContext(AppContext);

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("-");

  function changeText() {
    setEdit(!edit);
  }

  function buttonValue() {
    setEdit(false);
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

      {students.map((student) => (
        <div className="new-student-spacing" key={student.id}>
          <div className="student-spacing">
            <h1 className="new-student">{student.firstName}</h1>
            <h1 className="new-student">{student.lastName}</h1>
            <div className="point-spacing">
              {edit ? (
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={buttonValue}
                  type="text"
                  placeholder="-"
                />
              ) : (
                <button onClick={changeText}>{value}</button>
              )}
              {edit ? (
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={buttonValue}
                  type="text"
                  placeholder="-"
                />
              ) : (
                <button onClick={changeText}>{value}</button>
              )}
              {edit ? (
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={buttonValue}
                  type="text"
                  placeholder="-"
                />
              ) : (
                <button onClick={changeText}>{value}</button>
              )}
              {edit ? (
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={buttonValue}
                  type="text"
                  placeholder="-"
                />
              ) : (
                <button onClick={changeText}>{value}</button>
              )}
              {edit ? (
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={buttonValue}
                  type="text"
                  placeholder="-"
                />
              ) : (
                <button onClick={changeText}>{value}</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
