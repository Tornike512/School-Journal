import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";

import "./AddStudentModal.scss";

export function AddStudentModal() {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { setStudents } = useContext(AppContext);

  function addStudent() {
    const newStudent = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
    };

    setStudents((prev) => [...prev, newStudent]);
    setFirstName("");
    setLastName("");
  }

  if (!visible) {
    return (
      <>
        <button onClick={() => setVisible(true)} className="add-student">
          ახალი მოსწავლის დამატება
        </button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => setVisible(true)} className="add-student">
        ახალი მოსწავლის დამატება
      </button>

      <div className="modal-background">
        <div className="modal">
          <button onClick={() => setVisible(false)} className="x-button">
            X
          </button>
          <h1>ახალი მოსწავლის დამატება</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="firstname-input"
              placeholder="მოსწავლის სახელი"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <h3 className="student-name">შემოიყვანეთ მოსწავლის სახელი</h3>
            <input
              className="lastname-input"
              placeholder="მოსწავლის გვარი"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <h3 className="student-lastname">შემოიყვანეთ მოსწავლის გვარი</h3>
          </form>
          <button
            onClick={() => {
              {
                setVisible(false);
                addStudent();
              }
            }}
            className="add-button"
          >
            დამატება
          </button>
        </div>
      </div>
    </>
  );
}
