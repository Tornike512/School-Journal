import { useState, useContext } from "react";
import { AppContext } from "../AppContext";

import "./AddStudentModal.scss";

export function AddStudentModal() {
  const [visible, setVisible] = useState(false);

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
          <form onSubmit={(e) => e.preventDefault()} className="modal__input">
            <input placeholder="მოსწავლის სახელი" />
            <input placeholder="მოსწავლის გვარი" />
          </form>
          <button
            onClick={() => {
              setVisible(false);
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
