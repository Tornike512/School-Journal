import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./English.scss";

export function English() {
  const { subjects, setCurrentSubject, setSelectedSubject, selectedSubject } =
    useContext(AppContext);

  const thirdSubject = subjects[2];

  return (
    <button
      onClick={() => {
        setCurrentSubject(thirdSubject.id);
        setSelectedSubject("english");
      }}
      className={selectedSubject === "english" ? "toggled-english" : "english"}
      key={thirdSubject.id}
    >
      {thirdSubject.name}
    </button>
  );
}
