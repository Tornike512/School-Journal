import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./Math.scss";

export function Math() {
  const { subjects, setCurrentSubject, setSelectedSubject, selectedSubject } =
    useContext(AppContext);

  const secondSubject = subjects[1];

  return (
    <>
      <button
        onClick={() => {
          setCurrentSubject(secondSubject.id);
          setSelectedSubject("math");
        }}
        className={selectedSubject === "math" ? "toggled-math" : "math"}
        key={secondSubject.id}
      >
        {secondSubject.name}
      </button>
    </>
  );
}
