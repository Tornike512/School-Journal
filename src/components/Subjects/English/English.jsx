import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./English.scss";

export function English() {
  const { subjects, setCurrentSubject } = useContext(AppContext);

  const thirdSubject = subjects[2];

  return (
    <>
      <button
        onClick={() => setCurrentSubject(thirdSubject.id)}
        className="english"
        key={thirdSubject.id}
      >
        {thirdSubject.name}
      </button>
    </>
  );
}
