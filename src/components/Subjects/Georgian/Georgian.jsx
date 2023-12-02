import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./georgian.scss";

export function Georgian() {
  const { subjects, setCurrentSubject } = useContext(AppContext);

  const firstSubject = subjects[0];

  return (
    <>
      <button
        onClick={() => setCurrentSubject(firstSubject.id)}
        className="georgian"
        key={firstSubject.id}
      >
        {firstSubject.name}
      </button>
    </>
  );
}
