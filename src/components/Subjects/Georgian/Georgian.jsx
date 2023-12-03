import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./georgian.scss";

export function Georgian() {
  const { subjects, setCurrentSubject, selectedSubject, setSelectedSubject } =
    useContext(AppContext);

  const firstSubject = subjects[0];

  return (
    <button
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
