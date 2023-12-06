import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../../AppContext";
import "./georgian.scss";

export function Georgian() {
  const {
    subjects,
    setCurrentSubject,
    selectedSubject,
    setSelectedSubject,
    addedGrades,
  } = useContext(AppContext);

  const firstSubject = subjects[0];
  const buttonClicked = useRef();

  useEffect(() => {
    if (addedGrades === true) {
      buttonClicked.current.click();
    }
  }, [addedGrades]);

  return (
    <button
      ref={buttonClicked}
      onClick={() => {
        setCurrentSubject(firstSubject.id);
        setSelectedSubject("georgian");
      }}
      className={
        selectedSubject === "georgian" ? "toggled-georgian" : "georgian"
      }
      key={firstSubject.id}
    >
      {firstSubject.name}
    </button>
  );
}
