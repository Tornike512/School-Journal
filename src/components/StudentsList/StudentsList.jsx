import { useContext } from "react";
import { AppContext } from "../../AppContext";

import "./StudentsList.scss";

export function StudentsList() {
  const { students } = useContext(AppContext);

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
        <div className="new-student-spacing">
          <div className="student-spacing" key={student.id}>
            <h1 className="new-student">{student.firstName}</h1>
            <h1 className="new-student">{student.lastName}</h1>
            <div className="point-spacing">
              <input type="number" placeholder="-" />
              <input type="number" placeholder="-" />
              <input type="number" placeholder="-" />
              <input type="number" placeholder="-" />
              <input type="number" placeholder="-" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
