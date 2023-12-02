import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./Math.scss";

export function Math() {
  const { subjects, setCurrentSubject } = useContext(AppContext);

  const secondSubject = subjects[1];

  return (
    <>
      <button
        onClick={() => setCurrentSubject(secondSubject.id)}
        className="math"
        key={secondSubject.id}
      >
        {secondSubject.name}
      </button>
    </>
  );
}
